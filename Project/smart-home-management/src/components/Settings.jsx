import React, { useState } from "react";

function Settings() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    notifications: false,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic here
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Notifications:</label>
          <input
            name="notifications"
            type="checkbox"
            checked={form.notifications}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Theme:</label>
          <select name="theme" value={form.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
