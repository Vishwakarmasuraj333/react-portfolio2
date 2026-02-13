import { motion } from "framer-motion";
import "./About.css";
import profileImage from "../assets/profile.jpg";

export default function About() {
    return (
        <section className="about">
            <motion.div
                className="about-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={profileImage} alt="Profile" />
            </motion.div>
            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>About Me</h2>
                <p>
                    I'm a passionate <span>Web Developer</span> specializing in building
                    modern, responsive, and high-performance web applications using
                    React, Vite, and Tailwind CSS. I love turning ideas into interactive
                    and beautiful web experiences.
                    
                </p>
                <div className="about-buttons">
                    <button className="btn-primary">View Projects</button>
                    <button className="btn-secondary">Contact Me</button>
                </div>
                
            </motion.div>

        </section>
    );
}
