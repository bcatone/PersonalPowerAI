# imports
import openai
import tiktoken

# set API key
openai.api_key=""
# context
messages = []
# max token input const
MAX_TOKENS = 16384


# define starting context
systemContext = [
    {'role': 'system', 'content': 'You are a software developer with over 20 years of experience in the tech industry.'},
    {'role': 'system', 'content': 'You want to help share your wisdom with younger developers, answering their questions and providing guidance and advice.'}
]

# returns the number of tokens in the prompt list
def token_count():
    global messages
    encoding = tiktoken.encoding_for_model("gpt-3.5-turbo-16k")
    num_tokens = 0
    for m in messages: # count tokens for each message
        n = str(m)
        num_tokens += len(encoding.encode(n)) # tally of total tokens
    return num_tokens

# removes old chat messages to reduce token usage (only if equal to or over the limit)
def token_reduction():
    global messages
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
    messages = sys_list + chat_list # redefine context based on reduction

# function to generate AI response
def generate_response():
    global messages
    total_tokens = token_count() # get number of tokens used in context
    # recursively check to see if token count is over the limit
    while (total_tokens >= MAX_TOKENS):
        token_reduction()
        total_tokens = token_count() # get number of tokens used in context

    try:
        # generate response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-16k",
            messages=messages,
            temperature=0
        )
    except openai.error.APIError as e:
        return e
    except openai.error.APIConnectionError as e:
        return e
    except openai.error.Timeout as e:
        return e
    except openai.error.RateLimitError as e:
        return e
    except openai.error.InvalidRequestError as e:
        return e
    except openai.error.AuthenticationError as e:
        return e
    except openai.error.ServiceUnavailableError as e:
        return e

    ai_resp = response.choices[0].message["content"] # get response
    return ai_resp

# initial output
print("Mentor: Hello! I'm your AI mentor. How can I help you?")
messages = systemContext # add original context to prompt list
while True:
    user_input = input("User: ") # get user input
    if user_input.lower() == 'exit': # if the user wants to quit, exit program
        break
    messages.append({'role':'user', 'content':f"{user_input}"}) # add newest message to context
    response = generate_response() # generate response
    messages.append({'role':'assistant', 'content':f"{response}"}) # add AI response to context (chat memory)
    print("Mentor:", response) # output response