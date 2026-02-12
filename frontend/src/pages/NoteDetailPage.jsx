import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const NoteDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Failed to fetch note:", error);
        toast.error("Failed to load note");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <p style={styles.loading}>Loading note...</p>
      </>
    );
  }

  if (!note) return null;

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Edit Note</h2>

          <input
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            style={styles.input}
          />

          <textarea
            placeholder="Write your note..."
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            style={styles.textarea}
            rows={10}
          />

          <div style={styles.actions}>
            <button
              style={{ ...styles.button, opacity: saving ? 0.7 : 1, cursor: saving ? "not-allowed" : "pointer" }}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              style={{ ...styles.deleteButton }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

          <button style={styles.backBtn} onClick={() => navigate("/")}>
            ← Back
          </button>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    paddingTop: "100px", // space for Navbar
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  card: {
    width: "100%",
    maxWidth: "600px", // slightly bigger than create page
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    resize: "vertical",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  button: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  deleteButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  backBtn: {
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#64748b",
    color: "#fff",
    fontSize: "0.95rem",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  loading: {
    paddingTop: "120px",
    textAlign: "center",
    fontSize: "1.1rem",
  },
};

export default NoteDetailPage;
