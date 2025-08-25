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

  const heading = {
        color: "#84A0EF",
        textAlign: "center",
        fontFamily: "inherit",
        fontSize: "3rem",
        fontWeight: "bold",
        margin: 0,
      }

  const formContainer = {
        background: "#84A0EF",
        padding: "1em",
        borderRadius: 8,
        width: "50vw",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }

  const inputStyle = {
            width: "95%",
            padding: "8px",
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 14,
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            marginBottom: 12,
            height: 32,
          }

  return (<>
    <h1
      style={heading}
    >
      SMART HOME MANAGEMENT
    </h1>
    <div
      style={formContainer}
    >
      <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
          <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={inputStyle}
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
          Sign Up
        </button>
      </form>
      {error && <div style={{ color: "#fff", marginTop: "1rem" }}>{error}</div>}
      <p style={{ color: "#fff", marginTop: "1rem" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ textDecoration: "underline", cursor: "pointer" }}
          >
          Login
        </span>
      </p>
    </div>
          </>
  );
}

export default Signup;
