import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBook,
  deleteBook,
  editBook,
  toggleRead,
  setFilter,
} from "./actions";

function App() {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    id: null,
  });
  const [editMode, setEditMode] = useState(false);

  // Filtering logic
  const filteredBooks = books.filter((book) => {
    const authorMatch = filter.author
      ? book.author.toLowerCase().includes(filter.author.toLowerCase())
      : true;
    const genreMatch = filter.genre
      ? book.genre.toLowerCase().includes(filter.genre.toLowerCase())
      : true;
    const readMatch =
      filter.read === "all"
        ? true
        : filter.read === "read"
        ? book.read
        : !book.read;
    return authorMatch && genreMatch && readMatch;
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.genre) return;
    if (editMode) {
      dispatch(editBook(form));
      setEditMode(false);
    } else {
      dispatch(addBook(form));
    }
    setForm({ title: "", author: "", genre: "", id: null });
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    if (editMode && form.id === id) {
      setEditMode(false);
      setForm({ title: "", author: "", genre: "", id: null });
    }
  };

  const handleToggleRead = (id) => {
    dispatch(toggleRead(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #f8fafc 0%, #c7d2fe 100%)",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          borderRadius: 16,
          padding: 32,
          margin: "32px 0",
          border: "2px solid #6366f1",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#4f46e5", marginBottom: 24 }}>
          Book Library
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #a5b4fc",
              minWidth: 100,
            }}
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #a5b4fc",
              minWidth: 100,
            }}
          />
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Genre"
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #a5b4fc",
              minWidth: 100,
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              background: editMode ? "#f59e42" : "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
            }}
          >
            {editMode ? "Update" : "Add"}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={() => {
                setEditMode(false);
                setForm({ title: "", author: "", genre: "", id: null });
              }}
              style={{
                padding: "8px 16px",
                background: "#f87171",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              Cancel
            </button>
          )}
        </form>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            name="author"
            value={filter.author}
            onChange={handleFilterChange}
            placeholder="Filter by author"
            style={{
              padding: 6,
              borderRadius: 6,
              border: "1px solid #a5b4fc",
              minWidth: 100,
            }}
          />
          <input
            name="genre"
            value={filter.genre}
            onChange={handleFilterChange}
            placeholder="Filter by genre"
            style={{
              padding: 6,
              borderRadius: 6,
              border: "1px solid #a5b4fc",
              minWidth: 100,
            }}
          />
          <select
            name="read"
            value={filter.read}
            onChange={handleFilterChange}
            style={{ padding: 6, borderRadius: 6, border: "1px solid #a5b4fc" }}
          >
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredBooks.length === 0 && (
            <li style={{ textAlign: "center", color: "#888", marginTop: 20 }}>
              No books found.
            </li>
          )}
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 14,
                background: book.read ? "#e0e7ff" : "#f1f5f9",
                borderRadius: 8,
                padding: "10px 12px",
                boxShadow: book.read ? "0 2px 8px #6366f133" : "none",
                border: book.read ? "1px solid #6366f1" : "1px solid #e5e7eb",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 2, minWidth: 180 }}>
                <div
                  style={{ fontWeight: 600, fontSize: 18, color: "#1e293b" }}
                >
                  {book.title}
                </div>
                <div style={{ fontSize: 14, color: "#555" }}>
                  Author: {book.author}
                </div>
                <div style={{ fontSize: 14, color: "#555" }}>
                  Genre: {book.genre}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: book.read ? "#6366f1" : "#f59e42",
                    fontWeight: 600,
                  }}
                >
                  Status: {book.read ? "Read" : "Unread"}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <button
                  onClick={() => handleToggleRead(book.id)}
                  style={{
                    background: book.read ? "#f59e42" : "#6366f1",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {book.read ? "Mark Unread" : "Mark Read"}
                </button>
                <button
                  onClick={() => handleEdit(book)}
                  style={{
                    background: "#38bdf8",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  style={{
                    background: "#f87171",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
