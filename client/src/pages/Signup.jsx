import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
// import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
