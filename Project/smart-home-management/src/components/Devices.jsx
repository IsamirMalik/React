import React, { useState, useEffect } from "react";
import DeviceCard from "./DeviceCard";

function Devices() {
  const handleDelete = (idx) => {
    const updatedDevices = devices.filter((_, i) => i !== idx);
    setDevices(updatedDevices);
    localStorage.setItem("devices", JSON.stringify(updatedDevices));
    setShowForm(false);
    setEditIndex(null);
  };
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

  const handleEdit = (idx) => {
    setEditIndex(idx);
    setForm(devices[idx]);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...devices];
      updated[editIndex] = form;
      setDevices(updated);
      localStorage.setItem("devices", JSON.stringify(updated));
      setEditIndex(null);
    } else {
      const updated = [...devices, form];
      setDevices(updated);
      localStorage.setItem("devices", JSON.stringify(updated));
    }
    setShowForm(false);
    setForm({
      name: "",
      turnOn: "",
      turnOff: "",
      status: "off",
      location: "",
      energy: "",
    });
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
          Devices Page
        </h2>
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
          style={buttonStyling}
        >
          Add Device
        </button>
        {showForm && (
          <form onSubmit={handleSubmit} style={formContainer}>
            <div>
              <label style={labelStyling}>Device Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Turn On Time</label>
              <input
                name="turnOn"
                type="time"
                value={form.turnOn}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Turn Off Time</label>
              <input
                name="turnOff"
                type="time"
                value={form.turnOff}
                onChange={handleChange}
                required
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </div>
            <div>
              <label style={labelStyling}>Location/Room</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Energy Consumed (kWh)</label>
              <input
                name="energy"
                type="number"
                value={form.energy}
                onChange={handleChange}
                min="0"
                step="any"
                required
                style={inputStyling}
              />
            </div>
            <div>
              <button type="submit" style={buttonStyling}>
                {editIndex !== null ? "Update Device" : "Save Device"}
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
        <div style={{ display: "flex", flexDirection: "row" , flexWrap: "wrap" , justifyContent: "center" , gap: "1rem" , color: "#fff" }}>
          {devices.map((device, idx) => (
            <DeviceCard
              key={idx}
              name={device.name}
              location={device.location}
              status={device.status}
              turnOn={device.turnOn}
              turnOff={device.turnOff}
              energy={device.energy}
              onEdit={() => handleEdit(idx)}
              onDelete={() => handleDelete(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Devices;
