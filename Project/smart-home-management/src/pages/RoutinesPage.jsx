import React, { useState } from "react";

function RoutinesPage() {
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
    // Add routine logic here
    setShowForm(false);
    setForm({ name: "", time: "", action: "" });
  };

  return (
    <div className="routines-page">
      <h2>Routines Page</h2>
      <button className="add-routine-btn" onClick={() => setShowForm(true)}>
        Add Routine
      </button>
      {showForm && (
        <form className="routine-form" onSubmit={handleSubmit}>
          <div className="routine-form-group">
            <label className="routine-label">Routine Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="routine-input"
            />
          </div>
          <div className="routine-form-group">
            <label className="routine-label">Time</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
              className="routine-input"
            />
          </div>
          <div className="routine-form-group">
            <label className="routine-label">
              Action (e.g., Turn on device)
            </label>
            <input
              name="action"
              value={form.action}
              onChange={handleChange}
              required
              className="routine-input"
            />
          </div>
          <div className="routine-form-actions">
            <button type="submit" className="routine-save-btn">
              Save Routine
            </button>
            <button
              type="button"
              className="routine-cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RoutinesPage;
