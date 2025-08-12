import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions";

function App() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #c7d2fe 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          borderRadius: 16,
          padding: 32,
          border: "2px solid #6366f1",
          margin: 16,
        }}
      >
        <h2 style={{ textAlign: "center", color: "#4f46e5", marginBottom: 24 }}>
          TODO USING REDUX
        </h2>
        <form
          onSubmit={handleAdd}
          style={{ display: "flex", marginBottom: 24 }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add todo..."
            style={{
              padding: 10,
              width: "75%",
              border: "1px solid #a5b4fc",
              borderRadius: 8,
              outline: "none",
              fontSize: 16,
              marginRight: 8,
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 18px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 16,
              transition: "background 0.2s",
            }}
          >
            Add
          </button>
        </form>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 14,
                background: todo.status ? "#e0e7ff" : "#f1f5f9",
                borderRadius: 8,
                padding: "10px 12px",
                boxShadow: todo.status ? "0 2px 8px #6366f133" : "none",
                border: todo.status ? "1px solid #6366f1" : "1px solid #e5e7eb",
              }}
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{
                  textDecoration: todo.status ? "line-through" : "none",
                  flex: 1,
                  cursor: "pointer",
                  color: todo.status ? "#6366f1" : "#222",
                  fontWeight: todo.status ? 600 : 500,
                  fontSize: 16,
                  transition: "color 0.2s",
                }}
              >
                {todo.title}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                style={{
                  marginLeft: 10,
                  background: "#f87171",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "background 0.2s",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
