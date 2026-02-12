import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homemain = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .fade { animation: fadeUp 0.6s ease forwards; }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }

          .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.12);
          }
        `}
      </style>

      <div style={styles.container}>
        <Navbar />

        {/* HERO */}
        <section style={styles.hero} className="fade">
          <h1 style={styles.title}>ThinkBoard</h1>
          <p style={styles.subtitle}>
            Share short thoughts, moments, and experiences that matter.
          </p>

          <button
            style={styles.button}
            onClick={() => navigate("/notecard")}
          >
            Enter ThinkBoard
          </button>
        </section>

        {/* QUOTE */}
        <p style={styles.quote} className="fade delay-1">
          “Sometimes a few words are enough.”
        </p>

        {/* FEATURES */}
        <section style={styles.features}>
          <div style={styles.card} className="card fade delay-1">
            📝
            <h3>Share a Thought</h3>
            <p>Capture ideas and moments in a few lines.</p>
          </div>

          <div style={styles.card} className="card fade delay-2">
            🌱
            <h3>Reflect</h3>
            <p>Look back and see how your thinking grows.</p>
          </div>

          <div style={styles.card} className="card fade delay-3">
            🧠
            <h3>Simple</h3>
            <p>No clutter. Just your thoughts.</p>
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  container: {
    paddingTop: "80px", // navbar space
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #f8fafc, #eef2ff)",
    overflow: "hidden", // 🚫 no scroll
  },

  hero: {
    textAlign: "center",
    padding: "40px 20px 20px",
  },

  title: {
    fontSize: "2.7rem",
    fontWeight: "800",
    color: "#1e293b",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "1.05rem",
    color: "#475569",
  },

  button: {
    marginTop: "24px",
    padding: "12px 28px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },

  quote: {
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#64748b",
    marginBottom: "18px",
    fontStyle: "italic",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    padding: "0 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },
};

export default Homemain;
