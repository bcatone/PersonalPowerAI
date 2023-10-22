import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Header from "../Header/Header";
import Card from "./Card/Card";

const socialGoodTopics = [
  "Clean Energy",
  "Education for All",
  "Gender Equality",
  "Access to Clean Water",
  "Sustainable Agriculture",
  "Poverty Alleviation",
  "Healthcare for All",
  "Environmental Conservation",
  "Community Development",
  "Fair Trade Practices",
  "Arts and Culture Preservation",
  "Tech for Good Initiatives",
  "Support for People with Disabilities",
  "Disaster Relief",
  "Gender Equality in STEM",
  "Animal Welfare",
  "Affordable Childcare",
  "Global Peace and Security",
  "Hunger and Food Security",
  "Human Rights Advocacy",
  "Support for Indigenous Communities",
  "Anti-Human Trafficking",
  "Clean Air",
  "Community Safety",
  "Crisis Helplines",
  "LGBTQ+ Rights",
  "Conservation of Natural Habitats",
  "Cultural Diversity",
  "Water Sanitation",
  "Youth Sports and Recreation",
  "Literacy Programs",
  "Sustainable Tourism",
  "Access to Technology",
  "Support for Small Businesses",
];

function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isInterest, setIsInterest] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [likedCardCount, setLikedCardCount] = useState(0);
  const [dislikedCardCount, setDislikedCardCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  let isLoggedIn = true;

  useEffect(() => {
    const shuffledTopics = shuffleArray(socialGoodTopics);
    setCards(shuffledTopics);
  }, []);

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleThumbsUp = () => {
    if (currentCardIndex < cards.length - 1) {
      setIsInterest(true);
      setSwipeDirection("right");
      setLikedCardCount(likedCardCount + 1);
      setHasInteracted(true);

      if (likedCardCount === 4) {
        navigate("/match");
      }

      setTimeout(() => {
        setSwipeDirection(null);
        changeCard();
      }, 500);
    }
  };

  const handleThumbsDown = () => {
    if (currentCardIndex < cards.length - 1) {
      setIsInterest(true);
      setSwipeDirection("left");
      setDislikedCardCount(dislikedCardCount + 1);
      setHasInteracted(true);

      if (dislikedCardCount === 4) {
        navigate("/no-match");
      }

      setTimeout(() => {
        setSwipeDirection(null);
        changeCard();
      }, 500);
    }
  };

  const changeCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <section className="game">
        <div className="game__container">
          <div className="middle grid">
            <div className="cards grid full-area">
              {currentCardIndex < cards.length && (
                <Card
                  topic={cards[currentCardIndex]}
                  swipeDirection={swipeDirection}
                />
              )}
            </div>
            <div className="reactions-container">
              <div
                className="thumbsup reactions"
                onClick={handleThumbsUp}
              ></div>
              <span className="reaction-slash">/</span>
              <div
                className="thumbsdown reactions"
                onClick={handleThumbsDown}
              ></div>
            </div>
          </div>

          <div className="indicators grid">
            <span className="play-hint full-area">
              {hasInteracted
                ? "Choose as many topics as you want and hit Esc to stop the game"
                : "React on the topics to start the game"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Game.css';
// import Header from '../Header/Header';
// import Card from './Card/Card';

// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices',
//   'Arts and Culture Preservation',
//   'Tech for Good Initiatives',
//   'Support for People with Disabilities',
//   'Disaster Relief',
//   'Gender Equality in STEM',
//   'Animal Welfare',
//   'Affordable Childcare',
//   'Global Peace and Security',
//   'Hunger and Food Security',
//   'Human Rights Advocacy',
//   'Support for Indigenous Communities',
//   'Anti-Human Trafficking',
//   'Clean Air',
//   'Community Safety',
//   'Crisis Helplines',
//   'LGBTQ+ Rights',
//   'Conservation of Natural Habitats',
//   'Cultural Diversity',
//   'Water Sanitation',
//   'Youth Sports and Recreation',
//   'Literacy Programs',
//   'Sustainable Tourism',
//   'Access to Technology',
//   'Support for Small Businesses'
// ];

// function Game() {
//   const navigate = useNavigate();
//   const [cards, setCards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isInterest, setIsInterest] = useState(false);
//   const [swipeDirection, setSwipeDirection] = useState(null);
//   const [likedCardCount, setLikedCardCount] = useState(0);
//   const [dislikedCardCount, setDislikedCardCount] = useState(0);
//   let isLoggedIn = true;

//   useEffect(() => {
//     const shuffledTopics = shuffleArray(socialGoodTopics);
//     setCards(shuffledTopics);
//   }, []);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleThumbsUp = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(true);
//       setSwipeDirection('right');
//       setLikedCardCount(likedCardCount + 1);

//       if (likedCardCount === 4) {
//         // When the user likes 5 cards, navigate to the "/match" page
//         navigate('/match');
//       }

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const handleThumbsDown = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(false);
//       setSwipeDirection('left');
//       setDislikedCardCount(dislikedCardCount + 1);

//       if (dislikedCardCount === 4) {
//         // When the user dislikes 5 cards, navigate to the "/no-match" page
//         navigate('/no-match');
//       }

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const changeCard = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       navigate('/dashboard');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//       <Header loggedIn={isLoggedIn} />
//       <section className="game">
//         <div className="game__container">
//           <div className="middle grid">
//             <div className="cards grid full-area">
//               {cards.slice(currentCardIndex).map((topic, index) => (
//                 <Card key={index} topic={topic} swipeDirection={swipeDirection} />
//               ))}
//             </div>
//             <div className="reactions-container">
//               <div className="thumbsup reactions" onClick={handleThumbsUp}></div>
//               <span className="reaction-slash">/</span>
//               <div className="thumbsdown reactions" onClick={handleThumbsDown}></div>
//             </div>
//           </div>

//           <div className="indicators grid">
//             <span className="play-hint full-area">
//               {isInterest
//                 ? 'Choose as many topics as you want and hit Esc to stop the game'
//                 : 'React on the topics to start the game'}
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Game;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Game.css';
// import Header from '../Header/Header';
// import Card from './Card/Card';

// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices',
//   'Renewable Energy Sources',
//   'Affordable Housing',
//   'Access to Quality Education',
//   'Climate Change Mitigation',
//   'Youth Empowerment',
//   'Racial Justice',
//   'Support for Refugees',
//   "Women's Rights",
//   'Economic Equality',
//   'Mental Health Support',
//   'Wildlife Conservation',
//   'Clean Oceans',
//   'Equality in the Workplace',
//   'Accessible Healthcare',
//   'Support for Veterans',
//   'Elderly Care',
//   'Arts and Culture Preservation',
//   'Tech for Good Initiatives',
//   'Support for People with Disabilities',
//   'Disaster Relief',
//   'Gender Equality in STEM',
//   'Animal Welfare',
//   'Affordable Childcare',
//   'Global Peace and Security',
//   'Hunger and Food Security',
//   'Human Rights Advocacy',
//   'Support for Indigenous Communities',
//   'Anti-Human Trafficking',
//   'Clean Air',
//   'Community Safety',
//   'Crisis Helplines',
//   'LGBTQ+ Rights',
//   'Conservation of Natural Habitats',
//   'Cultural Diversity',
//   'Water Sanitation',
//   'Youth Sports and Recreation',
//   'Literacy Programs',
//   'Sustainable Tourism',
//   'Access to Technology',
//   'Support for Small Businesses'
// ];

// function Game() {
//   const navigate = useNavigate();
//   const [cards, setCards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isInterest, setIsInterest] = useState(false);
//   const [swipeDirection, setSwipeDirection] = useState(null);

//   useEffect(() => {
//     const shuffledTopics = shuffleArray(socialGoodTopics);
//     setCards(shuffledTopics);
//   }, []);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleThumbsUp = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(true);
//       setSwipeDirection('right');

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const handleThumbsDown = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(false);
//       setSwipeDirection('left');

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const changeCard = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       navigate('/dashboard');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//       <Header />
//       <section className="game">
//         <div className="game__container">
//           <div className="middle grid">
//             <div className="cards grid full-area">
//               {cards.slice(currentCardIndex, currentCardIndex + 1).map((topic, index) => (
//                 <Card key={index} topic={topic} swipeDirection={swipeDirection} />
//               ))}
//             </div>
//             <div className="reactions-container">
//               <div className="thumbsup reactions" onClick={handleThumbsUp}></div>
//               <span className="reaction-slash">/</span>
//               <div className="thumbsdown reactions" onClick={handleThumbsDown}></div>
//             </div>
//           </div>

//           <div className="indicators grid">
//             <span className="play-hint full-area">React on the topics to start the game</span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Game;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Game.css';
// import Header from '../Header/Header';
// import Card from './Card/Card';

// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices'
// ];

// function Game() {
//   const navigate = useNavigate();
//   const [cards, setCards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isInterest, setIsInterest] = useState(false);
//   const [swipeDirection, setSwipeDirection] = useState(null);

//   useEffect(() => {
//     const shuffledTopics = shuffleArray(socialGoodTopics);
//     setCards(shuffledTopics);
//   }, []);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleThumbsUp = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(true);
//       setSwipeDirection('right');

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const handleThumbsDown = () => {
//     if (currentCardIndex < cards.length) {
//       setIsInterest(false);
//       setSwipeDirection('left');

//       setTimeout(() => {
//         setSwipeDirection(null);
//         changeCard();
//       }, 500);
//     }
//   };

//   const changeCard = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       navigate('/dashboard');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//       <Header />
//       <section className="game">
//         <div className="game__container">
//           <div className="middle grid">
//             <div className="cards grid full-area">
//               {cards.slice(currentCardIndex).map((topic, index) => (
//                 <Card key={index} topic={topic} swipeDirection={swipeDirection} />
//               ))}
//             </div>
//             <div className="reactions-container">
//               <div className="thumbsup reactions" onClick={handleThumbsUp}></div>
//               <span className="reaction-slash">/</span>
//               <div className="thumbsdown reactions" onClick={handleThumbsDown}></div>
//             </div>
//           </div>

//           <div className="indicators grid">
//             <span className="play-hint full-area">React on the topics to start the game</span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Game;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Game.css'; // Import the Match component
// import Header from '../Header/Header';
// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices'
// ];

// function Game() {
//   const navigate = useNavigate();
//   const [cards, setCards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isInterest, setIsInterest] = useState(false);
//   const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
//   const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
//   const [firstReaction, setFirstReaction] = useState(true);
//   const [thumbsUpCount, setThumbsUpCount] = useState(0); // Count the number of thumbs-up clicks

//   useEffect(() => {
//     const shuffledTopics = shuffleArray(socialGoodTopics);
//     setCards(shuffledTopics);
//   }, []);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleThumbsUp = () => {
//     setIsInterest(true);
//     setThumbsUpClicked(true);
//     setThumbsDownClicked(false);

//     if (firstReaction) {
//       setFirstReaction(false);
//     }

//     setThumbsUpCount(thumbsUpCount + 1);

//     if (thumbsUpCount === 5) {
//       // When the user gives 5 thumbs-up clicks, redirect to the Match component
//       navigate('/match');
//     }

//     setTimeout(() => {
//       setThumbsUpClicked(false);
//       changeCard();
//     }, 1000);
//   };

//   const handleThumbsDown = () => {
//     setIsInterest(false);
//     setThumbsUpClicked(false);
//     setThumbsDownClicked(true);

//     if (firstReaction) {
//       setFirstReaction(false);
//     }

//     setTimeout(() => {
//       setThumbsDownClicked(false);
//       changeCard();
//     }, 1000);
//   };

//   const changeCard = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       navigate('/dashboard');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const createCard = () => {
//     if (currentCardIndex >= socialGoodTopics.length) {
//       const shuffledTopics = shuffleArray(socialGoodTopics);
//       setCards(shuffledTopics);
//       setCurrentCardIndex(0);
//     }

//     const currentTopic = cards[currentCardIndex];
//     return (
//       <div
//         className={`card ${
//           thumbsUpClicked ? 'thumbsup-clicked' : thumbsDownClicked ? 'thumbsdown-clicked' : ''
//         }`}
//       >
//         <div className="card-title">{currentTopic}</div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Header />
//       <section className="game">
//         <div className="game__container">
//           <div className="middle grid">
//             <div
//               className={`thumbsup reactions ${thumbsUpClicked ? 'clicked' : ''}`}
//               onClick={handleThumbsUp}
//             ></div>
//             <span className="reaction-slash">/</span>
//             <div className="cards grid full-area">{createCard()}</div>
//             <div
//               className={`thumbsdown reactions ${thumbsDownClicked ? 'clicked' : ''}`}
//               onClick={handleThumbsDown}
//             ></div>
//           </div>

//           <div className="indicators grid">
//             <span className="play-hint full-area">
//               {firstReaction
//                 ? 'React on the first topic to start the game'
//                 : 'Choose as many topics as you want and hit esc to stop the game'}
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Game;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Game.css';

// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices'
// ];

// function Game() {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [cards, setCards] = useState([]);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [isInterest, setIsInterest] = useState(false);
//   const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
//   const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
//   const [firstReaction, setFirstReaction] = useState(true);

//   useEffect(() => {
//     const shuffledTopics = shuffleArray(socialGoodTopics);
//     setCards(shuffledTopics);
//   }, []);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleThumbsUp = () => {
//     setIsInterest(true);
//     setThumbsUpClicked(true);
//     setThumbsDownClicked(false);

//     if (firstReaction) {
//       setFirstReaction(false);
//     }

//     setTimeout(() => {
//       setThumbsUpClicked(false);
//       changeCard();
//     }, 1000);
//   };

//   const handleThumbsDown = () => {
//     setIsInterest(false);
//     setThumbsUpClicked(false);
//     setThumbsDownClicked(true);

//     if (firstReaction) {
//       setFirstReaction(false);
//     }

//     setTimeout(() => {
//       setThumbsDownClicked(false);
//       changeCard();
//     }, 1000);
//   };

//   const changeCard = () => {
//     setCurrentCardIndex(currentCardIndex + 1);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       navigate('/dashboard'); // Use navigate to redirect to /dashboard
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const createCard = () => {
//     if (currentCardIndex >= socialGoodTopics.length) {
//       const shuffledTopics = shuffleArray(socialGoodTopics);
//       setCards(shuffledTopics);
//       setCurrentCardIndex(0);
//     }

//     const currentTopic = cards[currentCardIndex];
//     return (
//       <div
//         className={`card ${
//           thumbsUpClicked ? 'thumbsup-clicked' : thumbsDownClicked ? 'thumbsdown-clicked' : ''
//         }`}
//       >
//         <div className="card-title">{currentTopic}</div>
//       </div>
//     );
//   };

//   return (
//     <section className="game">
//       <div className="game__container">
//         <div className="middle grid">
//           <div
//             className={`thumbsup reactions ${thumbsUpClicked ? 'clicked' : ''}`}
//             onClick={handleThumbsUp}
//           ></div>
//           <span className="reaction-slash">/</span>
//           <div className="cards grid full-area">{createCard()}</div>
//           <div
//             className={`thumbsdown reactions ${thumbsDownClicked ? 'clicked' : ''}`}
//             onClick={handleThumbsDown}
//           ></div>
//         </div>

//         <div className="indicators grid">
//           <span className="play-hint full-area">
//             {firstReaction
//               ? 'React on the first topic to start the game'
//               : 'Choose as many topics as you want and hit esc to stop the game'}
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Game;

// import React, { useState, useEffect } from 'react';
// import './Game.css';

// const socialGoodTopics = [
//   'Clean Energy',
//   'Education for All',
//   'Gender Equality',
//   'Access to Clean Water',
//   'Sustainable Agriculture',
//   'Poverty Alleviation',
//   'Healthcare for All',
//   'Environmental Conservation',
//   'Community Development',
//   'Fair Trade Practices'
// ];

// function Game() {
//   const [cards, setCards] = useState(socialGoodTopics);

//   const shuffleArray = arr => {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   useEffect(() => {
//     const shuffledCards = shuffleArray(socialGoodTopics);
//     setCards(shuffledCards);
//   }, []);

//   const createCard = (topic, index) => (
//     <div className="card" key={index}>
//       <div className="card-title">{topic}</div>
//     </div>
//   );

//   return (
//     <section className="game">
//       <div className="game__container">
//         <div className="middle grid">
//           <div className="thumbsup reactions"></div>
//           <span className="reaction-slash">/</span>
//           <div className="cards grid full-area">
//             {cards.map((topic, index) => createCard(topic, index))}
//           </div>
//           <div className="thumbsdown reactions"></div>
//         </div>

//         <div className="indicators grid">
//           <span className="play-hint full-area">Hit enter to start</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Game;

// import React, { useState } from 'react';
// import './Game.css';

// const API_KEY = ''; // Your API key here

// function Game() {
//   const [cards, setCards] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   //   const [searchTerm, setSearchTerm] = useState('');
//   //   const searchEl = React.createRef();
//   // here we grab our search hint
//   const hintEl = document.querySelector('.game-hint');

//   const randomChoice = arr => {
//     return arr[Math.floor(arr.length * Math.random())];
//   };

//   const createCard = src => {
//     return <img src={src} alt="Card" className="card" onLoad={() => setIsLoading(false)} />;
//   };

//   const toggleLoading = state => {
//     setIsLoading(state);
//   };

//   const addCard = searchTerm => {
//     toggleLoading(true);
//     // Make an API request here to fetch cards based on searchTerm using the API_KEY
//     // Use the response to get GIFs and update the "cards" state with the card URLs
//     // After updating the state, the rendering will automatically take care of displaying the cards
//     // Handle errors as needed
//   };

//   //   const doSearch = event => {
//   //     const newSearchTerm = event.target.value;
//   //     setSearchTerm(newSearchTerm);

//   //     if (newSearchTerm.length > 2) {
//   //       document.body.classList.add('show-hint');
//   //       hintEl.innerHTML = `Hit more likes`;
//   //     } else {
//   //       document.body.classList.remove('show-hint');
//   //     }
//   //   };

//   return (
//     <section className="game">
//       <div className="game__container">
//         <div className="middle grid">
//           <button className="thumbsup reactions">
//             <img src="../../images/thumbsup.svg" alt="Thumbs Up" />
//           </button>
//           <div className="cards grid full-area">{cards.map((src, index) => createCard(src))}</div>
//           <button className="thumbsdown reactions">
//             <img src="../../images/thumbsdown.svg" alt="Thumbs Down" />
//           </button>
//         </div>

//         <div className="indicators grid">
//           <img className="spinner full-area" src="oval.svg" alt="Spinner" />
//           <span className="play-hint full-area" ref={hintEl}>
//             Hit enter to start
//           </span>{' '}
//           {/* Use ref to reference hintEl */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Game;
