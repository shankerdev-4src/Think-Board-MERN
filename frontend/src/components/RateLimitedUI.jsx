import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.inner}>
          <div style={styles.iconWrapper}>
            <ZapIcon style={styles.icon} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.heading}>Rate Limit Reached</h3>
            <p style={styles.message}>
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p style={styles.subMessage}>
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "40px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    padding: "20px",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#e0f2ff",
    borderRadius: "999px",
    padding: "16px",
    marginBottom: "16px",
  },
  icon: {
    width: "36px",
    height: "36px",
    color: "#2563eb",
  },
  textWrapper: {
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "8px",
  },
  message: {
    fontSize: "1rem",
    color: "#475569",
    marginBottom: "4px",
  },
  subMessage: {
    fontSize: "0.875rem",
    color: "#94a3b8",
  },
};

export default RateLimitedUI;
