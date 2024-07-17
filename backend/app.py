import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app)


@app.route('/health')
def hello_world():
    return 'All OK'


if __name__ == '__main__':
    app.run(debug=True)
