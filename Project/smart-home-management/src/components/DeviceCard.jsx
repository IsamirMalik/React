import React from "react";

function DeviceCard({
  name,
  location,
  status,
  turnOn,
  turnOff,
  energy,
  onEdit,
  onDelete,
}) {
  const styling = { fontSize: "1rem", marginBottom: "0.5rem" };

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

  const spanStyling = {
    color: "#000",
    fontWeight: "bold",
    marginRight: "0.5rem",
  };

  const container = {
    background: "#84A0EF",
    borderRadius: 8,
    width: "20vw",
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  };

  if (status === "Off") {
    status = (
      <span style={{ color: "red", fontWeight: "bold", marginRight: "0.5rem" }}>
        Off
      </span>
    );
  } else if (status === "On") {
    status = (
      <span
        style={{ color: "green", fontWeight: "bold", marginRight: "0.5rem" }}
      >
        On
      </span>
    );
  }
  return (
    <div style={container}>
      <h3 style={{ color: "black", lineHeight: 1 }}>
        <span>🔌 Device Name :</span> {name}
      </h3>
      <div style={styling}>
        <span style={spanStyling}>📌 Location:</span> {location}
      </div>
      <div style={styling}>
        <span style={spanStyling}>Status:</span> {status}
      </div>
      <div style={styling}>
        <span style={spanStyling}>On :</span> {turnOn} |{" "}
        <span style={spanStyling}>Off :</span> {turnOff}
      </div>
      <div style={styling}>
        <span style={spanStyling}>Energy :</span> {energy} kWh
      </div>
      <div>
        <button onClick={onEdit} style={buttonStyling}>
          Edit
        </button>
        <button onClick={onDelete} style={buttonStyling}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeviceCard;
