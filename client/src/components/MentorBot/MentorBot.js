import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import './MentorBot.css';

const MentorBot = () => {
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  });

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [mentorResponse, setMentorResponse] = useState('');

  const MAX_TOKENS = 16384;

  const addMessage = (role, content) => {
    const newMessage = { role, content };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const generateResponse = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-16k',
        messages: messages,
        temperature: 0
      });

      const aiResp = response.choices[0].message.content;
      addMessage('assistant', aiResp);
      setMentorResponse(aiResp); // Update mentor response
      setLoading(false);
    } catch (error) {
      console.error('API Error:', error);
      addMessage('assistant', 'An error occurred while generating a response.');
      setLoading(false);
    }
  };

  const handleUserInput = async () => {
    if (userInput.trim() === '' || loading) return;
    setLoading(true);

    addMessage('user', userInput);
    setUserInput('');

    await generateResponse();
  };

  return (
    <div className="chat-wrapper">
      <div className="chatbot-container">
        <h1 className="chatbot-h1">AI Mentor</h1>
        <div className="chatbox">
          {messages.map((message, index) => (
            <div key={index} className={message.role}>
              {message.content}
            </div>
          ))}
        </div>
        <input
          className="chatbot-input"
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <button className="chat-submit-btn" onClick={handleUserInput} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default MentorBot;

// import React, { useState, useEffect } from 'react';
// import OpenAI from 'openai';
// import './MentorBot.css'; // Make sure to import your CSS file

// const MentorBot = () => {
//   // Initialize the OpenAI client with your API key
//   const openai = new OpenAI({
//     apiKey: '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',
//     dangerouslyAllowBrowser: true
//   });

//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [mentorResponse, setMentorResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const MAX_TOKENS = 16384; // max token input

//   const addMessage = (role, content) => {
//     const newMessage = { role, content };
//     setMessages([...messages, newMessage]);
//   };

//   const generateResponse = async () => {
//     try {
//       const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo-16k',
//         messages: messages,
//         temperature: 0
//       });

//       const aiResp = response.choices[0].message.content;
//       setMentorResponse(aiResp);
//       setLoading(false);
//     } catch (error) {
//       console.error('API Error:', error);
//       setMentorResponse('An error occurred while generating a response.');
//       setLoading(false);
//     }
//   };

//   const handleUserInput = async () => {
//     if (userInput.trim() === '' || loading) return;
//     setLoading(true);

//     addMessage('user', userInput);

//     await generateResponse();

//     setUserInput('');
//   };

//   useEffect(() => {
//     if (messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
//       // Prevent adding the last assistant response twice
//       messages.pop();
//       setMessages([...messages]);
//     }
//   }, [mentorResponse]);

//   return (
//     <div className="chat-wrapper">
//       <div className="chatbot-container">
//         <h1 className="chatbot-h1">AI Mentor</h1>
//         <div className="chatbox">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={message.role === 'user' ? 'user-container' : 'assistant-container'}
//             >
//               <div className={message.role}>{message.content}</div>
//             </div>
//           ))}
//         </div>
//         <input
//           className="chatbot-input"
//           type="text"
//           placeholder="Type a message..."
//           value={userInput}
//           onChange={e => setUserInput(e.target.value)}
//         />
//         <button className="chat-submit-btn" onClick={handleUserInput} disabled={loading}>
//           {loading ? 'Sending...' : 'Send'}
//         </button>
//       </div>
//       {mentorResponse && <div className="assistant">{mentorResponse}</div>}
//     </div>
//   );
// };

// export default MentorBot;
// import React, { useState } from 'react';
// import OpenAI from 'openai';
// import './MentorBot.css';

// const MentorBot = () => {
//   // Initialize the OpenAI client with your API key
//   const openai = new OpenAI({
//     apiKey: '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', // Replace with your OpenAI API key
//     dangerouslyAllowBrowser: true
//   });

//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [mentorResponse, setMentorResponse] = useState('');

//   const MAX_TOKENS = 16384;

//   // Function to generate AI response
//   async function generateResponse() {
//     try {
//       const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo-16k',
//         messages: messages,
//         temperature: 0
//       });

//       let aiResp = response.choices[0].message.content;
//       return aiResp;
//     } catch (error) {
//       console.error('API Error:', error);
//       return 'An error occurred while generating a response.';
//     }
//   }

//   const handleUserInput = async () => {
//     if (userInput.trim() === '') return;

//     // Add the user's message to the chat
//     const userMessage = { role: 'user', content: userInput };

//     // Generate response
//     const response = await generateResponse();

//     // Check if the last message is an assistant message; if not, add the assistant message
//     if (messages.length === 0 || messages[messages.length - 1].role !== 'assistant') {
//       const mentorMessage = { role: 'assistant', content: response };
//       setMessages([...messages, userMessage, mentorMessage]);
//     } else {
//       setMessages([...messages, userMessage]);
//     }

//     // Display mentor's response
//     setMentorResponse(response);

//     // Clear the user input
//     setUserInput('');
//   };

//   return (
//     <div className="chat-wrapper">
//       <div className="chatbot-container">
//         <h1 className="chatbot-h1">AI Mentor</h1>
//         <div className="chatbox">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={message.role === 'user' ? 'user-container' : 'assistant-container'}
//             >
//               <div className={message.role}>{message.content}</div>
//             </div>
//           ))}
//         </div>
//         <input
//           className="chatbot-input"
//           type="text"
//           placeholder="Type a message..."
//           value={userInput}
//           onChange={e => setUserInput(e.target.value)}
//         />
//         <button className="chat-submit-btn" onClick={handleUserInput}>
//           Send
//         </button>
//         {mentorResponse && <div className="assistant">{mentorResponse}</div>}
//       </div>
//     </div>
//   );
// };

// export default MentorBot;
// import React, { useState, useEffect } from 'react';
// import OpenAI from 'openai';
// import './MentorBot.css'; // Make sure to import your CSS file

// const openai = new OpenAI({
//   apiKey: 'YOUR_API_KEY', // Replace 'YOUR_API_KEY' with the actual API key
//   dangerouslyAllowBrowser: true // You might need this for browser usage
// });

// const MentorBot = () => {
//   // Initialize the OpenAI client
//   const openai = new OpenAI({
//     apiKey: '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', // Replace with your OpenAI API key
//     dangerouslyAllowBrowser: true
//   });

//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [mentorResponse, setMentorResponse] = useState('');

//   const MAX_TOKENS = 16384; // max token input

//   // Function to generate AI response
//   async function generateResponse() {
//     try {
//       // Generate response
//       const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo-16k',
//         messages: messages,
//         temperature: 0
//       });

//       let aiResp = response.choices[0].message.content;
//       return aiResp;
//     } catch (error) {
//       // Handle API errors here
//       console.error('API Error:', error);
//       return 'An error occurred while generating a response.';
//     }
//   }

//   // Handle user input and generate responses
//   const handleUserInput = async () => {
//     if (userInput.trim() === '') return;

//     // Add the user's message to the chat
//     const userMessage = { role: 'user', content: userInput };
//     setMessages([...messages, userMessage]);

//     // Generate response
//     const response = await generateResponse();

//     // Add response to the chat
//     const mentorMessage = { role: 'assistant', content: response };
//     setMessages([...messages, mentorMessage]);

//     // Display mentor's response
//     setMentorResponse(response);

//     // Clear the user input
//     setUserInput('');
//   };

//   return (
//     <div className="chat-wrapper">
//       <div className="chatbot-container">
//         <h1 className="chatbot-h1">AI Mentor</h1>
//         <div className="chatbox">
//           {messages.map((message, index) => (
//             <div key={index} className={message.role}>
//               {message.content}
//             </div>
//           ))}
//         </div>
//         <input
//           className="chatbot-input"
//           type="text"
//           placeholder="Type a message..."
//           value={userInput}
//           onChange={e => setUserInput(e.target.value)}
//         />
//         <button className="chat-submit-btn" onClick={handleUserInput}>
//           Send
//         </button>
//         {mentorResponse && <div className="assistant">{mentorResponse}</div>}
//       </div>
//     </div>
//   );
// };

// export default MentorBot;
