import React, { useState } from 'react';
import './Game.css';

const API_KEY = ''; // Your API key here

function Game() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const searchEl = React.createRef();
  // here we grab our search hint
  const hintEl = document.querySelector('.game-hint');

  const randomChoice = arr => {
    return arr[Math.floor(arr.length * Math.random())];
  };

  const createCard = src => {
    return <img src={src} alt="Card" className="card" onLoad={() => setIsLoading(false)} />;
  };

  const toggleLoading = state => {
    setIsLoading(state);
  };

  const addCard = searchTerm => {
    toggleLoading(true);
    // Make an API request here to fetch cards based on searchTerm using the API_KEY
    // Use the response to get GIFs and update the "cards" state with the card URLs
    // After updating the state, the rendering will automatically take care of displaying the cards
    // Handle errors as needed
  };

  //   const doSearch = event => {
  //     const newSearchTerm = event.target.value;
  //     setSearchTerm(newSearchTerm);

  //     if (newSearchTerm.length > 2) {
  //       document.body.classList.add('show-hint');
  //       hintEl.innerHTML = `Hit more likes`;
  //     } else {
  //       document.body.classList.remove('show-hint');
  //     }
  //   };

  return (
    <section className="game">
      <div className="game__container">
        <div className="middle grid">
          <button className="thumbsup reactions">
            <img src="../../images/thumbsup.svg" alt="Thumbs Up" />
          </button>
          <div className="cards grid full-area">{cards.map((src, index) => createCard(src))}</div>
        </div>
        <button className="thumbsdown reactions">
          <img src="../../images/thumbsdown.svg" alt="Thumbs Down" />
        </button>

        <div className="indicators grid">
          <img className="spinner full-area" src="oval.svg" alt="Spinner" />
          <span className="play-hint full-area" ref={hintEl}>
            Hit enter to start
          </span>{' '}
          {/* Use ref to reference hintEl */}
        </div>
      </div>
    </section>
  );
}

export default Game;
