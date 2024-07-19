import os
from flask import Flask, request
from flask_cors import CORS
import json
import requests
from openai import AzureOpenAI
from dotenv import load_dotenv
import cookie_theft.data_process as dp
import cookie_theft.model as model
import cookie_theft.feature_extract as fe
load_dotenv()
import os

app = Flask(__name__)
cors = CORS(app)

azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
deployment = os.getenv("DEPLOYMENT_NAME")
search_endpoint = os.getenv("SEARCH_ENDPOINT")
search_endpoint_patient_record = os.getenv("SEARCH_ENDPOINT_PATIENTRECORD")
search_key = os.getenv("AZURE_SEARCH_RESOURCE_KEY")
search_key_patient_record = os.getenv("AZURE_SEARCH_RESOURCE_KEY_PATIENTRECORD")
deployment_patient_record=os.getenv("DEPLOYMENT_NAME_PATIENTRECORD")



def classify_patient_resp(text):
    url = "https://us-central1-aiplatform.googleapis.com/v1/projects/hack-team-smriti-empowerers/locations/us-central1/publishers/google/models/gemini-1.5-pro:generateContent"
    access_token = os.getenv("ACCESS_TOKEN_GCP")
    header = {
        "Authorization" : f"Bearer {access_token}"
    }
    body = {
        "contents": {
            "role": "user",
            "parts": {
                "text": f"Consider you an assistant whose job is to classify a statement into two classes. The first class is 1. patient medical report related and the second class is 2. text about a disease or condition (even though the text might contain words like patient if the sentence has more mentions of diseases or conditions it should belong to this class). Now the input would be a sentence and you should return the output as a string only, if the input sentence belongs to class 1 return the string 'one' else return string 'two'. The input sentence is - {text}"
            }
        },
        "generation_config": {
            "temperature": 0.9,
            "topP": 1.0,
            "maxOutputTokens": 4096
        }
    }

    response = requests.post(url,headers=header,json=body)
    final = response.json()
    print(final["candidates"][0]["content"]["parts"][0]["text"])
    if "one" in final["candidates"][0]["content"]["parts"][0]["text"]: return 1
    else: return 2

def get_medical_info(text):
    url = "https://us-central1-aiplatform.googleapis.com/v1/projects/hack-team-smriti-empowerers/locations/us-central1/publishers/google/models/gemini-1.5-pro:generateContent"
    access_token = os.getenv("ACCESS_TOKEN_GCP")
    header = {
        "Authorization" : f"Bearer {access_token}"
    }
    body={
        "contents": {
            "role": "user",
            "parts": {
                "text": "You are an AI Medical Assistant that can share some general information about these conditions and common treatment approaches which can provide general home remedies and precautions. Though i know you can't provide medical advice, and it's crucial to consult a doctor for a personalized treatment plan but here you just have to give basic information about the condition mentioned and give general remedies or studies on it.  Please be thorough and provide an informative answer. If you don't know the answer to a specific medical inquiry, advise seeking professional help. Question - The patient has a history of hypercholesterolemia and vitamin D deficiency. The recommended treatment includes - "
            }
        },
        "generation_config": {
            "temperature": 0.9,
            "topP": 1.0,
            "maxOutputTokens": 4096
        }
    }
    response = requests.post(url,headers=header,json=body)
    final = response.json()
    return (final["candidates"][0]["content"]["parts"][0]["text"])
    

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


@app.route("/api/cookie-theft",methods=["POST"])
def cookie_theft():
    file = "./cookie_theft/testfile.json"
    x = dp.process_string(file)
    ft = fe.get_tag_info(x)
    pr = model.train(ft)[0] 
    print(pr)
    if pr == 1:
        response_data = {
            "level": True
        }
        return response_data
    response_data = {
        "level": False
    }
    return response_data


@app.route("/api/patient-record-chatbot",methods=["POST"])
def patient_record_chatbot():
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
    
    cat = classify_patient_resp(user_message)
    if cat==1:
        completion = azure_client.chat.completions.create(
            model=deployment_patient_record,
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
                    "endpoint": f"{search_endpoint_patient_record}",
                    "index_name": "patientreport",
                    "semantic_configuration": "default",
                    "query_type": "semantic",
                    "fields_mapping": {},
                    "in_scope": True,
                    "role_information": "You are an AI assistant which has knowledge on the dementia diagnostic health lab report for the particular patient and given other demographic information like the age, gender, name etc of the patient you have to answer the questions in a way that make it sound personalised to the patient, for all the questions consider the patient to be the central theme for all answers",
                    "filter": None,
                    "strictness": 3,
                    "top_n_documents": 5,
                    "authentication": {
                    "type": "api_key",
                    "key": f"{search_key_patient_record}"
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
    else:
        resp = get_medical_info(user_message)
        response_data = {
            "role": "ai",
            "text": resp
        }

    return response_data


@app.route("/api/get-calender",methods=["POST"])
def get_calender_appointments():
    request_data = request.get_json()
    transcript = request_data.get("transcript")
    
    return {"data":transcript}


if __name__ == '__main__':
    app.run(debug=True)
