export default function Contact() {
  const sectionStyle = {
    minHeight: "100vh",
    backgroundColor:" hsl(221, 87%, 65%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 1rem",
  };

  const formStyle = {
    backgroundColor: "#111827",
    padding: "2.5rem",
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  };

  const h2Style = {
    textAlign: "center",
    fontSize: "2.5rem",
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

  const textareaStyle = {
    ...inputStyle,
    height: "150px",
    resize: "none",
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
        <h2 style={h2Style}>Contact Me</h2>
        <input type="text" placeholder="Name" required style={inputStyle} />
        <input type="email" placeholder="Email" required style={inputStyle} />
        <textarea placeholder="Message" required style={textareaStyle}></textarea>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#8b5cf6")}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
