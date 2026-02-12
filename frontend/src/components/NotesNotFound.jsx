import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconWrapper}>
          <NotebookIcon style={styles.icon} />
        </div>
        <h3 style={styles.heading}>No notes yet</h3>
        <p style={styles.text}>
          Ready to organize your thoughts? Create your first note to get started on your journey.
        </p>
        <Link to="/create" style={styles.button}>
          Create Your First Note
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "60px",
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    padding: "30px 25px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  iconWrapper: {
    backgroundColor: "#e0f2ff",
    borderRadius: "999px",
    padding: "20px",
    display: "inline-flex",
    marginBottom: "20px",
  },
  icon: {
    width: "40px",
    height: "40px",
    color: "#2563eb",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
  },
  text: {
    fontSize: "1rem",
    color: "#475569",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 22px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default NotesNotFound;
