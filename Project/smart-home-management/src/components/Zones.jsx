import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <h2>Zones (Rooms) Page</h2>
      <button
        onClick={() => {
          setShowForm(true);
          setForm({ name: "", type: "", floor: "" });
          setEditIndex(null);
        }}
      >
        Add Room
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Room Name:</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Room Type:</label>
            <input
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Floor:</label>
            <input name="floor" value={form.floor} onChange={handleChange} />
          </div>
          <button type="submit">
            {editIndex !== null ? "Update Room" : "Save Room"}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowForm(false);
              setEditIndex(null);
            }}
          >
            Cancel
          </button>
        </form>
      )}
      <ul>
        {zones.map((zone, idx) => (
          <li key={idx}>
            {zone.name} | {zone.type} | {zone.floor}
            <button onClick={() => handleEdit(idx)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Zones;
