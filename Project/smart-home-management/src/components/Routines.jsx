import React, { useState } from "react";
import RoutineCard from "./RoutineCard";

function Routines() {
  const [routines, setRoutines] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", time: "", action: "" });
  const [editIndex, setEditIndex] = useState(null);

  React.useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("routines")) || [];
    setRoutines(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = (idx) => {
    const updatedRoutines = routines.filter((_, i) => i !== idx);
    setRoutines(updatedRoutines);
    localStorage.setItem("routines", JSON.stringify(updatedRoutines));
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (idx) => {
    setEditIndex(idx);
    setForm(routines[idx]);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...routines];
      updated[editIndex] = form;
      setRoutines(updated);
      localStorage.setItem("routines", JSON.stringify(updated));
      setEditIndex(null);
    } else {
      const updated = [...routines, form];
      setRoutines(updated);
      localStorage.setItem("routines", JSON.stringify(updated));
    }
    setShowForm(false);
    setForm({ name: "", time: "", action: "" });
  };

  const buttonStyling = {
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
  };

  const formContainer = {
    background: "#84A0EF",
    padding: "1em",
    borderRadius: 8,
    width: "50vw",
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  };

  const labelStyling = {
    display: "block",
    fontWeight: 500,
    fontSize: 15,
    margin: 12,
    fontFamily: "Arial, Poppins , sans-serif",
    // textAlign: "left",
  };

  const inputStyling = {
    width: "95%",
    padding: "8px",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 14,
    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
    marginBottom: 2,
    height: 32,
  };

  return (
    <section>
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            color: "#84A0EF",
            textAlign: "center",
            fontFamily: "inherit",
            fontSize: "4rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Routines Page
        </h2>
        <button
          onClick={() => {
            setShowForm(true);
            setForm({ name: "", time: "", action: "" });
            setEditIndex(null);
          }}
          style={buttonStyling}
        >
          Add Routine
        </button>
        {showForm && (
          <form onSubmit={handleSubmit} style={formContainer}>
            <div>
              <label style={labelStyling}>Routine Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Time</label>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Action (e.g., Turn on device)</label>
              <input
                name="action"
                value={form.action}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <button type="submit" style={buttonStyling}>
                {editIndex !== null ? "Update Routine" : "Save Routine"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditIndex(null);
                }}
                style={buttonStyling}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <div style={{ display: "flex", flexDirection: "row" , flexWrap: "wrap" , justifyContent: "center" , gap: "1rem" , }}>
          {routines.map((routine, idx) => (
            <RoutineCard
              key={idx}
              name={routine.name}
              time={routine.time}
              action={routine.action}
              onEdit={() => handleEdit(idx)}
              onDelete={() => handleDelete(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Routines;
