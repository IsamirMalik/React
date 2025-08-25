import React, { useState, useEffect } from "react";
import ZoneCard from "./ZoneCard";

function Zones() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    type: "",
    floor: "",
  });
  const [zones, setZones] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("zones")) || [];
    setZones(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedZones;
    if (editIndex !== null) {
      updatedZones = zones.map((z, i) => (i === editIndex ? form : z));
    } else {
      updatedZones = [...zones, form];
    }
    setZones(updatedZones);
    localStorage.setItem("zones", JSON.stringify(updatedZones));
    setShowForm(false);
    setForm({ name: "", type: "", floor: "" });
    setEditIndex(null);
  };

  const handleEdit = (idx) => {
    setForm(zones[idx]);
    setShowForm(true);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    const updatedZones = zones.filter((_, i) => i !== idx);
    setZones(updatedZones);
    localStorage.setItem("zones", JSON.stringify(updatedZones));
    setShowForm(false);
    setEditIndex(null);
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
    <div>
      <h2
        style={{
          color: "#84A0EF",
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "4rem",
          fontWeight: "bold",
          marginTop: "3rem",
          marginBottom: "0rem",
          lineHeight: "1.1",
        }}
      >
        Your Zones / Rooms
      </h2>
      <p
        style={{
          color: "#111",
          textAlign: "center",
          maxWidth: 1000,
          margin: "0rem auto 0.5rem auto",
          fontSize: "1.1rem",
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          fontFamily: "Arial, Poppins , sans-serif",
        }}
      >
        Organize your smart home by adding zones (rooms). Each zone helps you
        group devices and routines for better control. Use the form to add a new
        zone, and manage existing zones with the cards below.
      </p>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowForm(true)} style={buttonStyling}>
          Add Zone
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} style={formContainer}>
          <div>
            <label style={labelStyling}>Room Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyling}
            />
          </div>
          <div>
            <label style={labelStyling}>Room Type</label>
            <input
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              style={inputStyling}
            />
          </div>
          <div>
            <label style={labelStyling}>Floor</label>
            <input
              name="floor"
              value={form.floor}
              onChange={handleChange}
              style={inputStyling}
            />
          </div>
          <div>
            <button type="submit" style={buttonStyling}>
              {editIndex !== null ? "Update Room" : "Save Room"}
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {zones.map((zone, idx) => (
          <ZoneCard
            key={idx}
            name={zone.name}
            type={zone.type}
            floor={zone.floor}
            onEdit={() => handleEdit(idx)}
            onDelete={() => handleDelete(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Zones;
