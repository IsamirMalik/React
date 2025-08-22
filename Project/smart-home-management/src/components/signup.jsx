import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setError("User already registered. Please login.");
      return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    navigate("/login");
  };

  return (
    <div>
      <h1>SMART HOME MANAGEMENT</h1>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <div>{error}</div>}
      <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}

export default Signup;
