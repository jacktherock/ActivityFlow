import logging
from flask import abort, request, g
from .route import app
from .constants import auth_check_ignore_list
from .config import db
from firebase_admin import auth