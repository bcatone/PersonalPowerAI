import React, { useState } from 'react';
import axios from 'axios';

function MentorBot() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const handleInputChange = (e) => { setNewMessage(e.target.value); };
    const handleSendMessage = async () => {
        if (newMessage.trim() === '') return; // Add user message to the chat interface
    setMessages([...messages, { text: newMessage, sender: 'User' }]); // Send the user message to the Flask backend
    try {
        const response = await axios.post('http://localhost:5000/chat', { newMsg: newMessage, context: messages, }); // Extract the AI response from the response
        const aiResponse = response.data.ai; // Update the chat interface with the AI response
        setMessages([...messages, { text: aiResponse, sender: 'AI' }]);
    } catch (error) { console.error('Error:', error); } // Clear the input field
        setNewMessage('');
    };
    return (
    <div className="chat-container"> <div className="chat-messages"> {messages.map((message, index) => ( <div key={index} className={`message ${message.sender}`}> <span className="message-sender">{message.sender}: </span> {message.text} </div> ))} </div> <div className="chat-input"> <input type="text" value={newMessage} onChange={handleInputChange} placeholder="Type a message..." /> <button className="button" onClick={handleSendMessage}> Send </button> </div> </div> );
} export default MentorBot;
