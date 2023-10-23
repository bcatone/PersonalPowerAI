import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Header from "../Header/Header";
import Card from "./Card/Card";
import card_data from "./card_data";
import similar_categories from "./similar_categories";
import mentors_data from "./random_mentors";

const API = "https://matchmaking-api.onrender.com/matches";

const getSimilarCategory = (category) => {
  const similarCategory = similar_categories[category];

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
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [card, setCard] = useState(Object.keys(card_data)[0]);
  const [skillsInterests, setSkillsInterests] = useState([]);

  const [menteeData, setMenteeData] = useState([]);

  const [counter, setCounter] = useState(0);

  const [category, setCategory] = useState(Object.keys(card_data)[0]);

  const [stop, setStop] = useState(false);

  const [asked, setAsked] = useState([card]);

  const [matches, setMatches] = useState([]);

  const [hasInteracted, setHasInteracted] = useState(false);

  let isLoggedIn = true;

  const nextSkillInterest = () => {
    const nextSkillInterest = skillsInterests.shift();

    if (nextSkillInterest) {
      setSkillsInterests(skillsInterests);

      setCard(nextSkillInterest);
      setAsked([...asked, nextSkillInterest]);
    } else {
      let similarCategory = getSimilarCategory(category);

      while (asked.includes(similarCategory)) {
        similarCategory = getSimilarCategory(category);
      }

      setCard(similarCategory);
      setCategory(similarCategory);
      setAsked([...asked, similarCategory]);
    }
  };

  const handleThumbsUp = () => {
    setHasInteracted(true);

    if (categories.includes(card)) {
      let randomSkillsInterests = getRandomSkillsInterests(card);

      const firstSkillInterest = randomSkillsInterests.shift();
      setCard(firstSkillInterest);

      setSkillsInterests(randomSkillsInterests);
      setAsked([...asked, randomSkillsInterests[0]]);
    } else {
      if (counter == 5) {
        setMenteeData([...menteeData, card]);
        setCounter(0);
        setStop(true);
        return;
      } else {
        setCounter(counter + 1);
      }

      nextSkillInterest();
    }
    setMenteeData([...menteeData, card]);
    setSwipeDirection("right");
    setTimeout(() => {
      setSwipeDirection(null);
    }, 500);
  };

  const handleThumbsDown = () => {
    setHasInteracted(true);

    if (categories.includes(card)) {
      let similarCategory = getSimilarCategory(card);

      while (asked.includes(similarCategory)) {
        similarCategory = getSimilarCategory(card);
      }

      setCard(similarCategory);
      setCategory(similarCategory);
      setAsked([...asked, similarCategory]);
    } else {
      nextSkillInterest();
    }
    setSwipeDirection("left");
    setTimeout(() => {
      setSwipeDirection(null);
    }, 500);
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

  useEffect(() => {
    if (stop) {
      const postMatch = async () => {
        console.log("menteeData", menteeData);
        fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menteeData),
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data["matches"].length > 0) {
              const matches_data = data["matches"].map((match) => {
                return {
                  mentor: match["mentor"],
                  data: mentors_data[match["mentor"]],
                };
              });
              console.log("matches", matches_data);
              navigate("/match", {
                state: { matches: matches_data, menteeData: menteeData },
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      postMatch();
    }
  }, [stop]);

  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <section className="game">
        <div className="game__container">
          <div className="middle grid">
            <div className="cards grid full-area">
              <Card topic={card} swipeDirection={swipeDirection} />
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
