


# Use a pipeline as a high-level helper
# from transformers import pipeline, BertTokenizer

# pipe = pipeline("fill-mask", model="medicalai/ClinicalBERT")

# MASK_TOKEN = BertTokenizer.mask_token

# prompt = f'''You are an AI Medical Assistant trained on a vast dataset of health information. Please be thorough and provide an informative answer. If you don't know the answer to a specific medical inquiry, advise seeking professional help. The question is - The patient has a history of hypercholesterolemia and vitamin D deficiency - so how can this be cured? {MASK_TOKEN}'''    

# resp = pipe(prompt)

# print(resp[0]['generated_text'])


# Load model directly
# from transformers import AutoTokenizer, AutoModelForMaskedLM, pipeline

# tokenizer = AutoTokenizer.from_pretrained("medicalai/ClinicalBERT")
# model = AutoModelForMaskedLM.from_pretrained("medicalai/ClinicalBERT")

# unmasker = pipeline('fill-mask', model=model, tokenizer=tokenizer)

# prompt = f'''The patient has a history of hypercholesterolemia and vitamin D deficiency. The recommended cure includes [MASK].'''  
# output = unmasker(prompt)

# # Print the results
# for idx, result in enumerate(output):
#     print(f"Option {idx + 1}: {result['sequence']}")

from transformers import pipeline

# Load the text generation pipeline
generator = pipeline('text-generation', model='gpt-2')

# Define the prompt
prompt = '''The patient has a history of hypercholesterolemia and vitamin D deficiency. The recommended treatment includes'''

# Generate text using the pipeline
generated_text = generator(prompt, max_length=100, num_return_sequences=3)

# Print the generated text
for idx, result in enumerate(generated_text):
    print(f"Option {idx + 1}: {result['generated_text']}")

