import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      return; // Don't show any message if fields are empty
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label><br />
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label><br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>

      {message && (
  <p style={{ marginTop: "20px", color: message.includes("Welcome") ? "green" : "red", fontWeight: "bold" }}>
    {message}
  </p>
)}

    </form>
  );
};

export default LoginForm;
