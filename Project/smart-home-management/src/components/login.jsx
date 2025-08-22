import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (!user) {
      setError("Invalid credentials or user not registered.");
      return;
    }
    setError("");
    // Redirect to home/dashboard or show success (for demo, redirect to signup)
    navigate("/");
  };

  return (
    <>
      <h1>SMART HOME MANAGEMENT</h1>
      <div>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        {error && <div>{error}</div>}
        <p>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
  
}

export default Login;
