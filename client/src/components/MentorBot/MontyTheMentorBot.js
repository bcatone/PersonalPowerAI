import React, { useState } from 'react';
import axios from 'axios';

const MontyTheMentorBot = () => {
  const [userInput, setUserInput] = useState('');
  const [mentorResponse, setMentorResponse] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);

  const FLASK_API = "http://localhost:5000";

  const handleUserInput = async () => {
    try {
      // Prepare the data structure with context and newMsg
      const data = {
        context: conversationHistory,
        newMsg: userInput,
      };

      // Make a POST request to the Flask server
      const response = await axios.post(`${FLASK_API}/chat_with_monty`, data);

      // Update the conversation history with the new response
      setConversationHistory([...conversationHistory, { type: 'user', message: userInput }, { type: 'chatbot', message: response.data.ai }]);

      // Set the mentor response to display
      setMentorResponse(response.data.ai);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <h1>Chat with Monty!</h1>
      <div>
        <label>User: </label>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={handleUserInput}>Submit</button>
      </div>
      <div>
        <p>Mentor: {mentorResponse}</p>
      </div>
    </div>
  );
};

export default MontyTheMentorBot;