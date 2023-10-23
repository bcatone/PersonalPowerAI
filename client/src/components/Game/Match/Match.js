import React from "react";
import "./Match.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import fireworks from "../../../images/hurray.png";
import { useLocation } from "react-router-dom";
import { async } from "regenerator-runtime";

function Match() {
  const { state } = useLocation();
  const { matches, menteeData } = state;

  console.log(matches);
  return (
    <section className="match">
      <Link to="/" className="logo logo_place_match">
        <img src={logo} alt="logo Personal Power" />
      </Link>
      <div className="match__wrapper">
        <img className="fireworks" src={fireworks} alt="fireworks icon" />
        <h2 className="match__title">
          Congrats! Here are your top 3 mentor matches!
        </h2>

        <div class="card-container">
          {matches.map((match, i) => {
            return (
              <div class="user-card">
                <img
                  src={
                    "https://api.dicebear.com/7.x/personas/svg?size=200&seed=" +
                    match.mentor
                  }
                  alt="User Avatar"
                  class="user-avatar"
                />

                <h2 class="user-name">{match.mentor}</h2>
                <div class="pill-container">
                  {match.data.categories.map((category) => {
                    return <span className="pill">{category}</span>;
                  })}

                  {match.data.interests.map((interest) => {
                    return <span className="pill">{interest}</span>;
                  })}

                  {match.data.skills.map((skill) => {
                    return <span className="pill">{skill}</span>;
                  })}
                </div>
                <button className="match__button">Connect</button>
              </div>
            );
          })}
        </div>

        <h3 className="match__title">You liked</h3>
        <div>
          {menteeData.map((data) => {
            return <span className="pill">{data}</span>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Match;
