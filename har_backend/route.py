import datetime
import logging
import firebase_admin
from firebase_admin import firestore,credentials
import os
from .controllers import get_activity_by_user, update_user_data
from .constants import auth_check_ignore_list
from .config import db
from firebase_admin import auth
from flask import Flask, abort, g, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Methods'] = 'GET, PUT'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, token'
    return response

@app.before_request
def before_request():
    print(request.headers)
    auth_token = request.headers.get('Token')
    if request.method != 'OPTIONS':
        if auth_token or (request.endpoint not in auth_check_ignore_list):
            if not auth_token:
                abort(403)          
            decoded_token = auth.verify_id_token(auth_token)
            uid =  decoded_token['uid']
            user = db.collection('userBioData').document(uid).get()
            if not user:
                abort(403)
            g.user = user.to_dict()


@app.route('/activity', methods=['GET'])
def get_user_activity():
    date =request.args.get("date")
    return jsonify(get_activity_by_user(date, g.user))


@app.route("/self", methods=["GET"])
def get_self():
    return jsonify(getattr(g, "user", {}))
    
    
@app.route("/")
def homepage():
    return jsonify({"success": True})


@app.route("/self", methods=["PUT"])
def update_self():
    return jsonify(update_user_data(g.user, request.json))
