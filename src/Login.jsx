import React from "react";

export default function Login() {
  const sectionStyle = {
    minHeight: "auto",
    backgroundColor: " hsl(221, 87%, 65%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const formStyle = {
    backgroundColor: "#1f2937",
    padding: "3rem",
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  };

  const h2Style = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#8b5cf6",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "white",
    color: "white",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#8b5cf6",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s, transform 0.2s",
  };

  return (
    <section style={sectionStyle}>
      <form style={formStyle}>
        <h2 style={h2Style}>Login</h2>
        <input type="text" placeholder="Username" required style={inputStyle} />
        <input type="password" placeholder="Password" required style={inputStyle} />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#8b5cf6")}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Login
        </button>
      </form>
    </section>
  );
}
