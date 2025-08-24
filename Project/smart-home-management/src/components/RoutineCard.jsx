import React from "react";

function RoutineCard({ name, time, action, onEdit, onDelete }) {

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
        Time: {time}
      </div>
      <div style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
        Action: {action}
      </div>
      <div>
        <button onClick={onEdit} style={buttonStyling}>
          Edit
        </button>
        <button onClick={onDelete} style={buttonStyling}>Delete</button>
      </div>
    </div>
  );
}

export default RoutineCard;
