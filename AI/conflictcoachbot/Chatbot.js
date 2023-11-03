import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import send from "../assets/icon_send.png";
import axios from 'axios';
import stagearrow from "../assets/icon_stagearrow.png";
import { ChatCompleteContext, HistoryContext, HistoryContextProvider } from '../ChatContexts';
import stagecomplete from "../assets/icon_stagecomplete.png";
import ailogo from "../assets/icon_ailogo.png";
import pencil from "../assets/icon_pencil.png";
import home from "../assets/icon_home.png";
import ChatStage from '../ChatStage';
import Loading from './Loading';
import StageLine from './StageLine';

const serverURL = "http://localhost:5000";


export default function Chatbot() {
    const { currChatHist, setCurrChatHist } = useContext(HistoryContext);
    const { chatToComplete, setChatToComplete } = useContext(ChatCompleteContext);

    const [messages, setMessages] = useState(currChatHist.messages);
    const globalStage = currChatHist.stage;
    const [localStage, setLocalStage] = useState(globalStage);
    const [atStartRef, setAtStartRef] = useState(currChatHist.atStartRef);

    const [invStage, setInvStage] = useState("inProgress");
    const [conStage, setConStage] = useState("notStarted");
    const [excStage, setExcStage] = useState("notStarted");
    const [agrStage, setAgrStage] = useState("notStarted");
    const [refStage, setRefStage] = useState("notStarted");
    const containerRef = useRef(null);

    const dbReq = indexedDB.open("chathistory", 1);

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [chatbotLoading, setChatbotLoading] = useState(false);
    const isInitialMount = useRef(true);
    const addRefLine = useRef(false);

    // Offline handling
    useEffect(() => {
        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, []);

    const generateResponse = async (msg) => {
        // let responses = ["Hello, how are you?", "That is a bad idea.", "You are very intelligent!"];
        // let i = Math.floor((Math.random() * 3));
        // if (i === 2) {
        //     advanceStage();
        // }
        // return responses[i];

        let context = getAllMessages();
        let input = { context: context, newMsg: msg, stage: getStageNum() };

        try {
            let resp = await axios.post(`${serverURL}/home/chat`, input, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return resp.data;
        } catch (err) {
            console.log(err);
            return "An error occured. Please try again later."
        }
    }

    useEffect(() => {
        console.log('currchathist useeffect');
        setMessages(currChatHist.messages);
        setAtStartRef(currChatHist.atStartRef);
        setStageProgress(currChatHist.stage);
        setLocalStage(currChatHist.stage);
    }, [currChatHist])

    const handleUserInput = async (content) => {
        console.log('handle user input');
        if (globalStage.name === "complete") {
            return;
        }

        let stageMessages = messages[globalStage.name];

        content.preventDefault();
        const userInput = content.target.userInput.value;
        content.target.userInput.value = "";
        setChatbotLoading(true);
        stageMessages.push({ type: 'user', message: userInput });
        setMessages({
            ...messages,
            [globalStage.name]: stageMessages
        });

        generateResponse(userInput).then((chatbotResp) => {
            setChatbotLoading(false);
            if (chatbotResp.stage === undefined) {
                stageMessages.push({ type: 'chatbot', message: chatbotResp });
                setMessages({
                    ...messages,
                    [globalStage.name]: stageMessages
                });
                return;
            }
            let chatbotStage = getStage(chatbotResp.stage);
            let addLine = false;
            let addMsg = true;

            // Transition stage
            if (chatbotStage !== globalStage.name) {
                addLine = true;
                if (chatbotStage === 'reflection') {
                    setAtStartRef(true);
                    stageMessages.push({ type: 'newStage', message: 'The chat is over for now. Please come back and start reflection once you are ready!' });
                    addLine = false;
                    addMsg = false;
                }
                if (chatbotStage !== 'complete') {
                    stageMessages = messages[chatbotStage];
                    advanceStage();
                }
            }

            // Add stage line break
            let msg = chatbotResp.ai;
            if (addLine && chatbotStage === 'complete') { // add msg before line
                stageMessages.push({ type: 'chatbot', message: msg });
                stageMessages.push({ type: 'newStage', message: chatbotStage });
                advanceStage();
            } else if (addLine) { // add line before msg
                stageMessages.push({ type: 'newStage', message: chatbotStage });
                stageMessages.push({ type: 'chatbot', message: msg });
            } else if (addMsg) { // no line
                stageMessages.push({ type: 'chatbot', message: msg });
            }

            setMessages({
                ...messages,
                [globalStage.name === "complete" ? "reflection" : globalStage.name]: stageMessages
            });
        })
    }

    const getStage = (stage) => {
        switch (stage) {
            case 1:
                return "invitation";
            case 2:
                return "connection";
            case 3:
                return "exchange";
            case 4:
                return "agreement";
            case 5:
                return "reflection";
            case 6:
                return "complete";
            default:
                return "";
        }
    }

    const getStageNum = () => {
        switch (globalStage.name) {
            case "invitation":
                return 1;
            case "connection":
                return 2;
            case "exchange":
                return 3;
            case "agreement":
                return 4;
            case "reflection":
                return 5;
            case "complete":
                return 6;
            default:
                return -1;
        }
    }

    const advanceStage = () => {
        switch (globalStage.name) {
            case "invitation":
                globalStage.setConnection();
                setInvStage("completed");
                setConStage("inProgress");
                break;
            case "connection":
                globalStage.setExchange();
                setConStage("completed");
                setExcStage("inProgress");
                break;
            case "exchange":
                globalStage.setAgreement();
                setExcStage("completed");
                setAgrStage("inProgress");
                break;
            case "agreement":
                globalStage.setReflection();
                setAgrStage("completed");
                break;
            case "reflection":
                globalStage.setComplete();
                setRefStage("completed");
                // move this chat to doneChats in LeftSideBar
                setChatToComplete(currChatHist.time);
                break;
            default:
                console.log('something bad happened in advanceStage')
        }
        setLocalStage(new ChatStage(globalStage.name));
    }

    const setStageProgress = (stage) => {
        switch (stage.name) {
            case "invitation":
                setInvStage("inProgress");
                setConStage("notStarted");
                setExcStage("notStarted");
                setAgrStage("notStarted");
                setRefStage("notStarted");
                break;
            case "connection":
                setInvStage("completed");
                setConStage("inProgress");
                setExcStage("notStarted");
                setAgrStage("notStarted");
                setRefStage("notStarted");
                break;
            case "exchange":
                setInvStage("completed");
                setConStage("completed");
                setExcStage("inProgress");
                setAgrStage("notStarted");
                setRefStage("notStarted");
                break;
            case "agreement":
                setInvStage("completed");
                setConStage("completed");
                setExcStage("completed");
                setAgrStage("inProgress");
                setRefStage("notStarted");
                break;
            case "reflection":
                setInvStage("completed");
                setConStage("completed");
                setExcStage("completed");
                setAgrStage("completed");
                currChatHist.atStartRef ? setRefStage("notStarted") : setRefStage("inProgress");
                break;
            case "complete":
                setInvStage("completed");
                setConStage("completed");
                setExcStage("completed");
                setAgrStage("completed");
                setRefStage("completed");
                break;
            default:
                console.log('something bad happened in setStageProgress');
        }
    }

    const startReflection = () => {
        let agrMsgs = messages.agreement.slice(0, -1);
        let newMsgs = {
            ...messages,
            agreement: agrMsgs,
      };

        setMessages(newMsgs);

        setRefStage("inProgress");
        setAtStartRef(false); 
        addRefLine.current = true;
    }

    const scrollToStage = (stage) => {
        // just scroll to top for Invitation stage?
        // unless we have a not started and then the chatbot transitions into the invitation stage...
        // if (stage === "invitation") {
        //     containerRef.current.scrollTop = 0;
        //     return;
        // }
        document.getElementById(`stageLine-${stage}`).scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (isOnline) containerRef.current.scrollTop = containerRef.current.scrollHeight;

        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        if (addRefLine.current) {
            addRefLine.current = false;
            let refMsgs = [
                { type: 'newStage', message: globalStage.name }, 
                { type: 'chatbot', message: "How satisfied are you with the outcomes or agreements you made in this conversation?"}
            ];
            setMessages(prevMessages => {
            return {
              ...prevMessages,
              [globalStage.name]: refMsgs
            };
          });
        }

        let updatedContext = { messages: messages, time: currChatHist.time, stage: globalStage, atStartRef: atStartRef }
        dbReq.onsuccess = function (evt) {
            let db = dbReq.result;
            if (!db.objectStoreNames.contains('chats') || (messages === currChatHist.messages && localStage === currChatHist.stage)) {
                return;
            }
            const tx = db.transaction('chats', 'readwrite');
            const store = tx.objectStore('chats');
            store.put(updatedContext);
        }
    }, [messages, localStage]);

    const getAllMessages = () => {
        let arr = [];
        let results = arr.concat(Object.values(messages));
        return results.flat();
    }

    const wordColor = (stage) => {
        if (stage === "notStarted") {
            return 'text-white opacity-50 font-normal';
        } else if (stage === "inProgress") {
            return 'text-white font-medium';
        } else {
            return 'text-white font-normal';
        }
    }

    const buttonColor = (stage) => {
        if (stage == "notStarted") {
            return 'opacity-50 bg-white';
        } else if (stage == "inProgress") {
            return 'opacity-100 bg-[#1993D6] text-black';
        } else {
            return 'hidden';
        }
    };

    return (
        <>
            <div>
                {!isOnline ? (
                    /* TODO: Offline page goes here */
                    <p>You are offline *sadge*</p>
                ) : (
                    <div>
                        
                        <div className="flex flex-col absolute top-24 md:top-12 right-0 w-full sm:w-4/5 px-8 py-12 h-[90%]">
                            <div className="w-full mb-4 h-[85%] overflow-y-auto" ref={containerRef}>
                                {getAllMessages().map((message, index) => (
                                    <div>{message.type === 'newStage' ? <StageLine key={globalStage} text={message.message} /> :
                                        <div className={`flex flex-col basis-3/5" ${message.type === 'user' ? "items-end" : "items-start"}`}>

                                            <div className='flex'>
                                                <img src={ailogo} alt="Chatbot Logo" className={`items-start w-12 h-12 mt-1" ${message.type === 'user' ? "hidden" : ""}`} />

                                                <span
                                                    key={index}
                                                    className={`ml-10 mb-4 p-4 font-calibri text-base whitespace-pre-wrap max-w-fit' ${message.type === 'user' ? 'bg-white text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl' : 'bg-[#e1e1e1] bg-opacity-10 text-white rounded-tl-xl rounded-tr-xl rounded-br-xl'
                                                        }`}
                                                    style={{ display: 'inline-block' }}>

                                                    {message.message}
                                                </span>
                                            </div>
                                        </div>
                                    }
                                    </div>
                                ))}
                                {chatbotLoading ? <Loading /> : <></>}
                                {atStartRef ? <div className='flex justify-center'>
                                    <button onClick={() => startReflection()} className="bg-transparent hover:bg-[#1993D6] text-white py-2 px-4 mx-3 border border-[#494949] hover:border-transparent rounded-full inline-flex items-center">
                                        <img className='w-4 h-4 mr-2' src={pencil} alt="Reflection pencil" />
                                        <span>Start Reflection Now</span>
                                    </button>
                                    <button onClick={() => {window.location.href = '/welcome'}} className="bg-transparent hover:bg-[#1993D6] text-white py-2 px-4 mx-3 border border-[#494949] hover:border-transparent rounded-full inline-flex items-center">
                                        <img className='w-4 h-4 mr-2' src={home} alt="Home icon" />
                                        <span>Back to Homepage</span>
                                    </button>
                                </div> : <></>}
                            </div>
                            <div className={`flex w-full items-center ${atStartRef || globalStage.name === "complete" ? 'hidden' : ''}`}>
                                <form onSubmit={handleUserInput}>
                                    <input
                                        type="text"
                                        name="userInput"
                                        className="mt-12 ml-8 flex absolute w-11/12 px-4 py-2 font-calibri font-sm rounded-xl border text-[#bbbbbb] border-[#bbbbbb] bg-[#1e1e1e] focus:outline-none focus:ring focus:border-blue-500"
                                        placeholder="Send your message here"
                                    />
                                    <span>
                                        <button
                                            type="submit"
                                            className="mt-12 ml-8 absolute right-[4%] rounded-full transform translate-y-1/2">
                                            <img src={send} className="w-6 h-6" />
                                        </button>
                                    </span>
                                </form>
                            </div>
                        </div>


                        {/* Top Status Bar */}
                        <div className="flex flex-row w-full sm:w-4/5 h-20 bg-[#242424] absolute right-0 md:top-0 top-16">
                            <button onClick={() => scrollToStage('invitation')} className='w-[18%] justify-center group'>
                                <div className={`flex flex-col justify-center items-center w-full h-20 ${invStage === "inProgress" ? "border-b-4 border-[#1993D6]" : ""} group-hover:border-b-4 group-hover:border-[#1993D6]`}>
                                    <div className='p-4'>
                                        <div className={`flex flex-col md:flex-row items-center md:inline-flex`}>
                                            <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full justify-center flex items-center ${buttonColor(invStage)}`}> 
                                                <p className="-top-1 font-calibri text-base text-center"> 1 </p>
                                            </div>
                                            <img className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-[#1993D6] ${invStage === "completed" ? "block" : "hidden"}`} src={stagecomplete} alt="Stage Complete" /> 
                                            <p className={`md:ml-6 text-sm sm:text-base md:text-lg leading-22 font-calibri ${wordColor(invStage)}`}>
                                                Invitation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <div className="flex max-w-xs items-center">
                                <img src={stagearrow} className="rounded-full" alt="Stage Arrow" />
                            </div>

                            <button onClick={() => scrollToStage('connection')} className='w-[18%] group justify-center' disabled={conStage === "notStarted"}>
                                <div className={`flex flex-col justify-center items-center w-full h-20 ${conStage === "inProgress" ? "border-b-4 border-[#1993D6]" : ""} ${conStage !== "notStarted" ? "group-hover:border-b-4 group-hover:border-[#1993D6]" : ""}`}>
                                    <div className='p-4'>
                                        <div className={`flex flex-col md:flex-row items-center md:inline-flex`}>
                                            <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full justify-center flex items-center ${buttonColor(conStage)}`}> 
                                                <p className="-top-1 font-calibri text-base text-center"> 2 </p>
                                            </div>
                                            <img className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-[#1993D6] ${conStage === "completed" ? "block" : "hidden"}`} src={stagecomplete} alt="Stage Complete" /> 
                                            <p className={`md:ml-6 text-sm sm:text-base md:text-lg leading-22 font-calibri ${wordColor(conStage)}`}>
                                                Connection
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <div className="flex max-w-xs items-center">
                                <img src={stagearrow} className="rounded-full" alt="Stage Arrow" />
                            </div>

                            <button onClick={() => scrollToStage('exchange')} className='w-[18%] justify-center group' disabled={excStage === "notStarted"}>
                                <div className={`flex flex-col justify-center items-center w-full h-20 ${excStage === "inProgress" ? "border-b-4 border-[#1993D6]" : ""} ${excStage !== "notStarted" ? "group-hover:border-b-4 group-hover:border-[#1993D6]" : ""}`}>
                                    <div className='p-4'>
                                        <div className={`flex flex-col md:flex-row items-center md:inline-flex`}>
                                            <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full justify-center flex items-center ${buttonColor(excStage)}`}> 
                                                <p className="-top-1 font-calibri text-base text-center"> 3 </p>
                                            </div>
                                            <img className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-[#1993D6] ${excStage === "completed" ? "block" : "hidden"}`} src={stagecomplete} alt="Stage Complete" /> 
                                            <p className={`md:ml-6 text-sm sm:text-base md:text-lg leading-22 font-calibri ${wordColor(excStage)}`}>
                                                Exchange
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <div className="flex max-w-xs items-center">
                                <img src={stagearrow} className="rounded-full" alt="Stage Arrow" />
                            </div>

                            <button onClick={() => scrollToStage('agreement')} className='w-[18%] justify-center group' disabled={agrStage === "notStarted"}>
                                <div className={`flex flex-col justify-center items-center w-full h-20 ${agrStage === "inProgress" ? "border-b-4 border-[#1993D6]" : ""} ${agrStage !== "notStarted" ? "group-hover:border-b-4 group-hover:border-[#1993D6]" : ""}`}>
                                    <div className='p-4'>
                                        <div className={`flex flex-col md:flex-row items-center md:inline-flex`}>
                                            <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full justify-center flex items-center ${buttonColor(agrStage)}`}> 
                                                <p className="-top-1 font-calibri text-base text-center"> 4 </p>
                                            </div>
                                            <img className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-[#1993D6] ${agrStage === "completed" ? "block" : "hidden"}`} src={stagecomplete} alt="Stage Complete" /> 
                                            <p className={`md:ml-6 text-sm sm:text-base md:text-lg leading-22 font-calibri ${wordColor(agrStage)}`}>
                                                Agreement
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <div className="flex max-w-xs items-center">
                                <img src={stagearrow} className="rounded-full" alt="Stage Arrow" />
                            </div>

                            <button onClick={() => scrollToStage('reflection')} className='w-[18%] justify-center group' disabled={refStage === "notStarted"}>
                                <div className={`flex flex-col justify-center items-center w-full h-20 ${refStage === "inProgress" ? "border-b-4 border-[#1993D6]" : ""} ${refStage !== "notStarted" ? "group-hover:border-b-4 group-hover:border-[#1993D6]" : ""}`}>
                                    <div className='p-4'>
                                        <div className={`flex flex-col md:flex-row items-center md:inline-flex`}>
                                            <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full justify-center flex items-center ${buttonColor(refStage)}`}> 
                                                <p className="-top-1 font-calibri text-base text-center"> 5 </p>
                                            </div>
                                            <img className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-[#1993D6] ${refStage === "completed" ? "block" : "hidden"}`} src={stagecomplete} alt="Stage Complete" /> 
                                            <p className={`md:ml-6 text-sm sm:text-base md:text-lg leading-22 font-calibri ${wordColor(refStage)}`}>
                                                Reflection
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}