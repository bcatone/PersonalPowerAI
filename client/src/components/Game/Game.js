import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css'; // Import the Match component
import Header from '../Header/Header';
const socialGoodTopics = [
  'Clean Energy',
  'Education for All',
  'Gender Equality',
  'Access to Clean Water',
  'Sustainable Agriculture',
  'Poverty Alleviation',
  'Healthcare for All',
  'Environmental Conservation',
  'Community Development',
  'Fair Trade Practices'
];

function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isInterest, setIsInterest] = useState(false);
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
  const [firstReaction, setFirstReaction] = useState(true);
  const [thumbsUpCount, setThumbsUpCount] = useState(0); // Count the number of thumbs-up clicks

  useEffect(() => {
    const shuffledTopics = shuffleArray(socialGoodTopics);
    setCards(shuffledTopics);
  }, []);

  const shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleThumbsUp = () => {
    setIsInterest(true);
    setThumbsUpClicked(true);
    setThumbsDownClicked(false);

    if (firstReaction) {
      setFirstReaction(false);
    }

    setThumbsUpCount(thumbsUpCount + 1);

    if (thumbsUpCount === 5) {
      // When the user gives 5 thumbs-up clicks, redirect to the Match component
      navigate('/match');
    }

    setTimeout(() => {
      setThumbsUpClicked(false);
      changeCard();
    }, 1000);
  };

  const handleThumbsDown = () => {
    setIsInterest(false);
    setThumbsUpClicked(false);
    setThumbsDownClicked(true);

    if (firstReaction) {
      setFirstReaction(false);
    }

    setTimeout(() => {
      setThumbsDownClicked(false);
      changeCard();
    }, 1000);
  };

  const changeCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const createCard = () => {
    if (currentCardIndex >= socialGoodTopics.length) {
      const shuffledTopics = shuffleArray(socialGoodTopics);
      setCards(shuffledTopics);
      setCurrentCardIndex(0);
    }

    const currentTopic = cards[currentCardIndex];
    return (
      <div
        className={`card ${
          thumbsUpClicked ? 'thumbsup-clicked' : thumbsDownClicked ? 'thumbsdown-clicked' : ''
        }`}
      >
        <div className="card-title">{currentTopic}</div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <section className="game">
        <div className="game__container">
          <div className="middle grid">
            <div
              className={`thumbsup reactions ${thumbsUpClicked ? 'clicked' : ''}`}
              onClick={handleThumbsUp}
            ></div>
            <span className="reaction-slash">/</span>
            <div className="cards grid full-area">{createCard()}</div>
            <div
              className={`thumbsdown reactions ${thumbsDownClicked ? 'clicked' : ''}`}
              onClick={handleThumbsDown}
            ></div>
          </div>

          <div className="indicators grid">
            <span className="play-hint full-area">
              {firstReaction
                ? 'React on the first topic to start the game'
                : 'Choose as many topics as you want and hit esc to stop the game'}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;

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
