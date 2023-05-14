import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import config from './config'

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
const database = firebase.database();

export { auth, db, database }
