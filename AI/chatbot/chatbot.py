# imports
import openai
import tiktoken
from decouple import config

# set API key
# openai.api_key=""
openai.api_key = config('OPENAI_API_KEY')

# max token input const
MAX_TOKENS = 16384

# define starting context
systemContext = [
    {'role': 'system', 'content': 'You are a software developer with over 20 years of experience in the tech industry.'},
    {'role': 'system', 'content': 'You want to help share your wisdom with younger developers, answering their questions and providing guidance and advice.'},
    {'role': 'system', 'content': 'Engage in conversation with me by asking me a new question that will help you provide a more effective and personalized answer.'},
    {'role': 'system', 'content': 'Speak to me as though you were my friend offering me advice, but you are extremely knowledgable about the subject.'},
    {'role': 'system', 'content': 'Keep your responses short and concise, but informative. Do not end the conversation.'}
]

# returns the number of tokens in the prompt list
def token_count(messages):
    encoding = tiktoken.encoding_for_model("gpt-4")
    num_tokens = 0
    for m in messages: # count tokens for each message
        n = str(m)
        num_tokens += len(encoding.encode(n)) # tally of total tokens
    return num_tokens

# removes old chat messages to reduce token usage (only if equal to or over the limit)
def token_reduction(messages):
    sys_list = []
    chat_list = []
    for m in messages:
        # split context based on role
        if (m["role"] == "system"):
            sys_list.append(m)
        else:
            chat_list.append(m)
    num_chat = len(chat_list) # determine number of chat messages
    first_index = num_chat // 3 # get index of second third of chat messages
    del chat_list[:first_index] # delete first third of chat messages
    return sys_list + chat_list # redefine context based on reduction

# function to generate AI response
def generate_response(input):
    # add previous context
    messages = systemContext
    for msg in input.get('context'):
        if msg.get('type') == 'user':
            messages.append({'role':'user', 'content':f"{msg.get('message')}"})
        elif msg.get('type') == 'chatbot':
            messages.append({'role':'assistant', 'content':f"{msg.get('message')}"})
        else:
            continue

    user_input = input.get('newMsg') # get the latest message from the user

    messages.append({'role':'user', 'content':f"{user_input}"}) # add it to the list of messages

    total_tokens = token_count(messages) # get number of tokens used in context
    # recursively check to see if token count is over the limit
    while (total_tokens >= MAX_TOKENS):
        messages = token_reduction()
        total_tokens = token_count(messages) # get number of tokens used in context
    
    # generate response from gpt
    ai_resp = None
    try:
        # generate response
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages,
            temperature=0
        )
        ai_resp = response.choices[0].message["content"] # get response
    # catch errors
    except openai.error.APIError as e:
        ai_resp = str(e)
    except openai.error.APIConnectionError as e:
        ai_resp = str(e)
    except openai.error.Timeout as e:
        ai_resp = str(e)
    except openai.error.RateLimitError as e:
        ai_resp = str(e)
    except openai.error.InvalidRequestError as e:
        ai_resp = str(e)
    except openai.error.AuthenticationError as e:
        ai_resp = str(e)
    except openai.error.ServiceUnavailableError as e:
        ai_resp = str(e)

    messages.append({'role':'assistant', 'content':f"{ai_resp}"})

    return {'ai': ai_resp, 'history': messages}
