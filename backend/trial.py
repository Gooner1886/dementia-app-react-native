from openai import AzureOpenAI
import os
import json
from dotenv import load_dotenv
load_dotenv()

endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
deployment = os.getenv("DEPLOYMENT_NAME")
search_endpoint = os.getenv("SEARCH_ENDPOINT")
search_key = os.getenv("AZURE_SEARCH_RESOURCE_KEY")
search_index = os.getenv("SEARCH_INDEX_NAME")
      
azure_client = AzureOpenAI(
    azure_endpoint=endpoint,
    api_key=os.getenv("API_KEY"),
    api_version="2024-05-01-preview",
)
      
completion = azure_client.chat.completions.create(
    model=deployment,
    messages= [
    {
      "role": "user",
      "content": "what is dementia"
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
print(json_resp["choices"][0]["message"]["content"])
