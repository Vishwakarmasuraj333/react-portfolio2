import { motion } from "framer-motion";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I’m <span>Vishwakarma Suraj</span>
        </h1>
        <p>React Developer building modern, fast & beautiful web applications.</p>
        <div className="buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </motion.div>
    </section>
  );
}
