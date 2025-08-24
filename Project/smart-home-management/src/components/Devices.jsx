import React, { useState, useEffect } from "react";

function Devices() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    turnOn: "",
    turnOff: "",
    status: "off",
    location: "",
    energy: "",
  });
  const [devices, setDevices] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("devices")) || [];
    setDevices(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedDevices;
    if (editIndex !== null) {
      updatedDevices = devices.map((d, i) => (i === editIndex ? form : d));
    } else {
      updatedDevices = [...devices, form];
    }
    setDevices(updatedDevices);
    localStorage.setItem("devices", JSON.stringify(updatedDevices));
    setShowForm(false);
    setForm({
      name: "",
      turnOn: "",
      turnOff: "",
      status: "off",
      location: "",
      energy: "",
    });
    setEditIndex(null);
  };

  const handleEdit = (idx) => {
    setForm(devices[idx]);
    setShowForm(true);
    setEditIndex(idx);
  };

  return (
    <div>
      <h2>Devices Page</h2>
      <button
        onClick={() => {
          setShowForm(true);
          setForm({
            name: "",
            turnOn: "",
            turnOff: "",
            status: "off",
            location: "",
            energy: "",
          });
          setEditIndex(null);
        }}
      >
        Add Device
      </button>
      
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Device Name:</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Turn On Time:</label>
            <input
              name="turnOn"
              type="time"
              value={form.turnOn}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Turn Off Time:</label>
            <input
              name="turnOff"
              type="time"
              value={form.turnOff}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Status:</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>
          <div>
            <label>Location/Room:</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Energy Consumed (kWh):</label>
            <input
              name="energy"
              type="number"
              value={form.energy}
              onChange={handleChange}
              min="0"
              step="any"
              required
            />
          </div>
          <button type="submit">
            {editIndex !== null ? "Update Device" : "Save Device"}
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
        {devices.map((device, idx) => (
          <li key={idx}>
            {device.name} | {device.location} | {device.status} |{" "}
            {device.turnOn} - {device.turnOff} | {device.energy} kWh
            <button onClick={() => handleEdit(idx)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Devices;
