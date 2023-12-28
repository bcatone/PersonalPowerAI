import React, { useState } from 'react';

const DailyChallenges = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const challengeText = `Pick a day to actively practice empathy. Make an effort to see situations from other people's perspectives, both at work and in your personal life. Engage in conversations with colleagues and friends, trying to understand their feelings and needs.`;

  const truncatedText = challengeText.split('\n').slice(0, 5).join('\n');

  return (
    <div className="grid-item grid-item-challenges">
      <h3 className="grid-item-name dark">Daily Challenges</h3>
      <div className="challenge-text">
        {isPopupVisible ? challengeText : truncatedText}
        {!isPopupVisible && (
          <div className="more-link" onClick={togglePopup}>
            read more...
          </div>
        )}
      </div>
      {isPopupVisible && (
        <div className="popup-hint">
          <div className="popup__container">
            <p className="popup-hint-text">{challengeText}</p>
            {/* Other popup hints */}
            <button className="button button-hint" onClick={togglePopup}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyChallenges;
