import React, { useState } from "react";

function Routines() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    time: "",
    action: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle adding the routine (e.g., update state or send to backend)
    setShowForm(false);
    setForm({ name: "", time: "", action: "" });
  };

  return (
    <div>
      <h2>Routines Page</h2>
      <button onClick={() => setShowForm(true)}>Add Routine</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Routine Name:</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Action (e.g., Turn on device):</label>
            <input
              name="action"
              value={form.action}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save Routine</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default Routines;
