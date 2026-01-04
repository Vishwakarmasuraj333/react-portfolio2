import "./Qualification.css";

export default function Qualification() {
  return (
    <section className="qualification">
      <h2>Qualification</h2>

      <div className="qualification-grid">
        <div className="qualification-card">
          <h3>BSc it</h3>
          <p>Mumbai University</p>
          <span>2022 – 2025</span>
        </div>

        <div className="qualification-card">
          <h3>12th – Science (PCM)</h3>
          <p>vvv Senior Secondary School</p>
          <span>2017 – 2019</span>
        </div>

        <div className="qualification-card">
          <h3>10th – Secondary School</h3>
          <p>vvv High School</p>
          <span>2016 – 2017</span>
        </div>
      </div>
    </section>
  );
}
