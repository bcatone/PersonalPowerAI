from flask import Flask, make_response
from flask import request
# from chatbot.chatbot_v2 import *
from chatbot.chatbot import *

app = Flask(__name__)

# @app.route('/home/chat', methods=['POST'])
# def talk_to_ai():
#     if request.method == 'POST':
#         ai_resp = generate_response(request.body)
#     response = make_response()
#     return response

@app.post('/home/chat')
def talk_to_ai():
    data = request.json
    ai_resp = generate_response(data)
    return ai_resp

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__ == "__main__":
    app.run(debug=True)