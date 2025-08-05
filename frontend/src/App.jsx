import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Signup from "./components/Signup";

function App() {
  const [referral, setReferral] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100">
        <Routes>
          <Route path="/" element={<Login setReferral={setReferral} />} />
          <Route
            path="/signup"
            element={<Signup setReferral={setReferral} />}
          />
          <Route
            path="/dashboard"
            element={
              referral ? <Dashboard referral={referral} /> : <Navigate to="/" />
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
