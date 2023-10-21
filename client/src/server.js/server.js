const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Enable JSON parsing for incoming requests
app.use(express.json());

// Define an endpoint for your chatbot
app.post('/home/chat', async (req, res) => {
  const input = req.body;

  // Your chatbot logic here, which uses the input and interacts with the AI model

  // Example: Make a request to your AI model (replace with your actual model URL)
  const aiResponse = await axios.post('YOUR_AI_MODEL_URL', input);

  // Send the response back to the client
  res.json(aiResponse.data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
