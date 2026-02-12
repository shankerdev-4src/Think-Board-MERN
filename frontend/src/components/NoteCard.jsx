import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // prevent navigation

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link to={`/note/${note._id}`} style={styles.card}>
      <div style={styles.content}>
        <div>
          <h3 style={styles.title}>{note.title}</h3>
          <p style={styles.text}>{note.content}</p>
        </div>

        <div style={styles.footer}>
          <span style={styles.date}>{formatDate(new Date(note.createdAt))}</span>
          <div style={styles.actions}>
            <PenSquareIcon style={styles.icon} />
            <button onClick={(e) => handleDelete(e, note._id)} style={styles.deleteButton}>
              <Trash2Icon style={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  card: {
    display: "block",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    padding: "20px",
    borderTop: "4px solid #3265fc", // green top border
    textDecoration: "none",
    transition: "all 0.2s",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#111827",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  text: {
    fontSize: "0.95rem",
    color: "#374151",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  date: {
    fontSize: "0.75rem",
    color: "#6b7280",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    width: "18px",
    height: "18px",
    color: "#6b7280",
  },
  deleteButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    color: "#ef4444",
  },
};

export default NoteCard;
