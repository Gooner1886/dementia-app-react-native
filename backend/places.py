# import requests

# def get_place_info(address):
# # Base URL
#   base_url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
# # Parameters in a dictionary
#   params = {
#    "input": address,
#    "inputtype": "textquery",
#    "fields": "formatted_address,name,business_status,place_id",
#   }
# # Send request and capture response
#   response = requests.get(base_url, params=params)
# # Check if the request was successful
#   if response.status_code == 200:
#     return response.json()
#   else:
#     return None
  

# # api_key = "YOUR_API_KEY"
# address = "J B Nagar, Andheri East, Mumbai 400059"
# place_info = get_place_info(address)
# if place_info is not None:
#   print(place_info)
# else:
#   print("Failed to get a response from Google Places API")



import vertexai
from vertexai.generative_models import GenerativeModel

# TODO(developer): Update and un-comment below line
# project_id = "PROJECT_ID"

vertexai.init(project="hack-team-smriti-empowerers", location="us-central1")

model = GenerativeModel("gemini-1.5-pro")

response = model.generate_content(
    "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?"
)

print(response.text)