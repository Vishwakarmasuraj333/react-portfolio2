import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr
        style={{
          width: "80%",
          height: "5px",
          margin: "50px auto",
          border: "none",
          borderRadius: "20px",
          background: "linear-gradient(to left, red, yellow, purple)",
        }}
      />

      <p>© 2026 Suraj • All Rights Reserved</p>

      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </footer>
  );
}
