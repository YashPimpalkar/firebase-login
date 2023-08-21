import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ResponsiveNavbar from './Navbar';
import SignIn from './SignIn';  // Create the SignIn component as discussed in previous answers
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Google sign-in error', error);
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <Router>
      <ResponsiveNavbar user={user} onLogin={handleGoogleLogin} onLogout={handleLogout} />
      <Route path="/signin" component={SignIn} />
      <Route exact path="/">
        {user ? <div>Home</div> : <Redirect to="/signin" />}
      </Route>
      {/* Similarly add routes for Exercises and Plan */}
    </Router>
  );
}

export default App;
