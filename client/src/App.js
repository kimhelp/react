import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// ,Link
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  const AuthenticPage1 = Auth(LandingPage, null);
  const AuthenticPage2 = Auth(LoginPage, null);
  const AuthenticPage3 = Auth(RegisterPage, null);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AuthenticPage1 />} />
          <Route exact path="/login" element={<AuthenticPage2 />} />
          <Route exact path="/register" element={<AuthenticPage3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
