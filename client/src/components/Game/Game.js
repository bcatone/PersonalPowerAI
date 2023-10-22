import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Header from "../Header/Header";
import Card from "./Card/Card";
import card_data from "./card_data";
import similar_categories from "./similar_categories";

const API = "https://matchmaking-api.onrender.com/matches";

const getSimilarCategory = (category) => {
  const similarCategory = similar_categories[category];

  console.log("similarCategory", similarCategory);

  return similarCategory[Math.floor(Math.random() * similarCategory.length)];
};

const getRandomSkillsInterests = (category) => {
  const skillsInterests = card_data[category]["skills"].concat(
    card_data[category]["interests"]
  );

  const randomSkillsInterests = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * skillsInterests.length);

    randomSkillsInterests.push(skillsInterests[randomIndex]);

    skillsInterests.splice(randomIndex, 1);
  }

  return randomSkillsInterests;
};

const categories = Object.keys(card_data);

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
