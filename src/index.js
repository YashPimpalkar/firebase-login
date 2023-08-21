import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth'; // and other services






const firebaseConfig = {
  apiKey: "AIzaSyBaB05N2wNINbSUPPTq-LNuUvCvI-y1DpI",
  authDomain: "fitess-app-b5a19.firebaseapp.com",
  projectId: "fitess-app-b5a19",
  storageBucket: "fitess-app-b5a19.appspot.com",
  messagingSenderId: "334797473658",
  appId: "1:334797473658:web:e9d4e1a4f1a8252870b8c3",
  measurementId: "G-BGMLT7Z69T"
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
