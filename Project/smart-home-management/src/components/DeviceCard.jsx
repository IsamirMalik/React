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
  return (
    <div
      style={{
        background: "#84A0EF",
        borderRadius: 8,
        width: "20vw",
        margin: "1rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }}
    >
      <h3 style={{  color: "black" , lineHeight: 1}}>{name}</h3>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Location: {location}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Status: {status}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        On: {turnOn} | Off: {turnOff}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Energy: {energy} kWh
      </div>
      <div>
        <button onClick={onEdit} style={{ marginRight: 8 }}>
          Edit
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default DeviceCard;
