import os
from flask import Flask, request
from flask_cors import CORS
import json
from openai import AzureOpenAI
from dotenv import load_dotenv
load_dotenv()
import os

app = Flask(__name__)
cors = CORS(app)

azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
azure_deployment = os.getenv("DEPLOYMENT_NAME")
deployment = os.getenv("DEPLOYMENT_NAME")
search_endpoint = os.getenv("SEARCH_ENDPOINT")
search_key = os.getenv("AZURE_SEARCH_RESOURCE_KEY")


@app.route('/health')
def hello_world():
    return 'All OK'

@app.route("/api/leaflet-chat", methods=["POST"])
def chat_response():
    azure_client = AzureOpenAI(
        azure_endpoint=azure_endpoint,
        api_key=os.getenv("API_KEY"),
        api_version="2024-05-01-preview",
    )
    request_data = request.get_json()

    # Extract the user message
    messages = request_data.get("messages", [])
    user_message = ""
    if messages and "text" in messages[0]:
        user_message = messages[0]["text"]

    completion = azure_client.chat.completions.create(
        model=deployment,
        messages= [
        {
        "role": "user",
        "content": f"{user_message}"
        }],
        max_tokens=800,
        temperature=0,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=None,
        stream=False,
        extra_body={
        "data_sources": [{
            "type": "azure_search",
            "parameters": {
                "endpoint": f"{search_endpoint}",
                "index_name": "docu-smriti-index",
                "semantic_configuration": "default",
                "query_type": "semantic",
                "fields_mapping": {},
                "in_scope": True,
                "role_information": "You are an AI assistant that helps people find information regarding dementia",
                "filter": None,
                "strictness": 3,
                "top_n_documents": 5,
                "authentication": {
                "type": "api_key",
                "key": f"{search_key}"
                }
            }
            }]
        }
    )

    data = completion.to_json()
    json_resp = json.loads(data)

    # Sample response data
    response_data = {
        "role": "ai",
        "text": json_resp["choices"][0]["message"]["content"],
    }

    return response_data


if __name__ == '__main__':
    app.run(debug=True)
