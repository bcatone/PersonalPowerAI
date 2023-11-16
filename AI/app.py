from flask import Flask, make_response, request, jsonify
from chatbot.chatbot import *

app = Flask(__name__)

# Updated route for Python chatbot
@app.route('/chat_with_monty', methods=['POST'])
def chat_with_monty():
    try:
        # Get data from the request
        data = request.json
        print(data)

        # Extract context and newMsg from the data
        context = data.get('context', [])
        new_msg = data.get('newMsg', '')

        # Generate a response using the chatbot
        response = generate_response({'context': context, 'newMsg': new_msg})

        # Return the response as JSON
        return jsonify({"ai": response['ai'], "history": response['history']})

    except Exception as e:
        # Handle any exceptions, return an error response if necessary
        return jsonify({"error": str(e)}), 500

# @app.post('/chat')
# def talk_to_ai():
#     data = request.json
#     ai_resp = generate_response(data)
#     return ai_resp

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__ == "__main__":
    app.run(debug=True)
