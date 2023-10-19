from flask import Flask, request, jsonify

app = Flask(__name)

# Add chatbot routes

@app.route('/match', methods=['POST'])
def match_users():
    user_data = request.json
    # Implement your AI matching logic here
    matched_mentor = {}  # Replace this with actual matching results
    return jsonify(matched_mentor)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)