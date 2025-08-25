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
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <>
      <h1
        style={{
          color: "#84A0EF",
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "3rem",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        SMART HOME MANAGEMENT
      </h1>
      <div
        style={{
          background: "#84A0EF",
          padding: "1em",
          borderRadius: 8,
          width: "50vw",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "95%",
              padding: "8px",
              borderRadius: 5,
              border: "1px solid #ccc",
              fontSize: 14,
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              marginBottom: 12,
              height: 32,
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: "95%",
              padding: "8px",
              borderRadius: 5,
              border: "1px solid #ccc",
              fontSize: 14,
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              marginBottom: 12,
              height: 32,
            }}
          />
          <button
            type="submit"
            style={{
              background: "#fff",
              color: "#000",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: 4,
              fontWeight: 600,
              cursor: "pointer",
              margin: "0.5rem",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            Login
          </button>
        </form>
        {error && (
          <div style={{ color: "#fff", marginTop: "1rem" }}>{error}</div>
        )}
        <p style={{ color: "#fff", marginTop: "1rem" }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
