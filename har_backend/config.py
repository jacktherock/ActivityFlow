import os
import firebase_admin
from firebase_admin import firestore, credentials, auth
from flask import abort, g, request
from .constants import auth_check_ignore_list

token_file_path = os.path.join(os.path.dirname(__file__), 'serviceaccount.json')
creds = credentials.Certificate(token_file_path)
firebase_app=firebase_admin.initialize_app(creds)
db =firestore.client()
