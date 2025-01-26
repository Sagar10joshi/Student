import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import StudentsPage from './components/StudentsPage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqpksr5sLf1lIIMlYoSibBB6MBVQLLOK8",
  authDomain: "student-34336.firebaseapp.com",
  projectId: "student-34336",
  storageBucket: "student-34336.firebasestorage.app",
  messagingSenderId: "400850052517",
  appId: "1:400850052517:web:8eeeb847648b66eeeab44c",
  measurementId: "G-GXXWG3287Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Login Error:', error.message);
      alert('Invalid credentials');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/students" element={<StudentsPage db={db} />} />
            {/* <Route path="/*" element={<Navigate to="/students" />} /> */}
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
