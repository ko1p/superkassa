import firebase from 'firebase/app';
import 'firebase/database'
import {firebaseConfig} from "./config";

const app = firebase.initializeApp(firebaseConfig);
export const database = app.database().ref().child('isButtonOn');
export const isOnline = app.database().ref().child('isOnline');
