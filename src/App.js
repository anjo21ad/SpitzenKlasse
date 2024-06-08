// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import CreateProject from './views/CreateProject';
import Experience from './views/Experience';
import Skills from './views/Skills';
import CandidateProfile from './views/CandidateProfile';
import AssignmentDescription from './views/AssignmentDescription';
import AssignmentCreated from './views/AssignmentCreated';
import CvList from './views/CvList';
import Login from './views/Login';
import './styles/App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASPELAv9wKlf_j8V9KXj3RhbGQsqpA9k0",
  authDomain: "spitzenklasse-7e8ed.firebaseapp.com",
  projectId: "spitzenklasse-7e8ed",
  storageBucket: "spitzenklasse-7e8ed.appspot.com",
  messagingSenderId: "1088391952720",
  appId: "1:1088391952720:web:1bad7432d31c6494999455",
  measurementId: "G-ZB3WZ7MGNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/candidate-profile" element={<CandidateProfile />} />
            <Route path="/assignment-description" element={<AssignmentDescription />} />
            <Route path="/assignment-created" element={<AssignmentCreated />} />
            <Route path="/cv-list" element={<CvList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
export { db };
