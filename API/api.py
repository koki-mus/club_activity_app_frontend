from types import MethodDescriptorType
from flask import Flask, jsonify,request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, supports_credentials=True)

@app.route("/hoge", methods=["GET"])
def getHoge():
    response = jsonify({"token":"dummy"})
    return response

@app.route("/post", methods=["post"])
def postf():
    # request.form["token"] #
    response = jsonify({"token":"dummy"})
    return response

print("ss")
app.run(host="127.0.0.1", port=8888, debug=True)