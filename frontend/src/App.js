// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
          <Route path="/signup" element={<SignupPage setLoggedInUser={setLoggedInUser} />} />
          <Route path="/dashboard" element={<DashboardPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
