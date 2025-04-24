import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
};

export default App;
