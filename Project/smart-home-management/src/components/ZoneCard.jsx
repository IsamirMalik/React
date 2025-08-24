import React from "react";

function ZoneCard({ name, type, floor, onEdit, onDelete }) {
  return (
    <div
      style={{
        background: "#84A0EF",
        padding: "1em",
        borderRadius: 8,
        width: "20vw",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem 0", color: "#84A0EF" }}>{name}</h3>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Type: {type}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Floor: {floor}
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

export default ZoneCard;
