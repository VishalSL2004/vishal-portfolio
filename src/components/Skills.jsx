import { motion as Motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "SQL"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        My <span className="accent">Skills</span>
      </h2>

      <div className="container">
        <div className="row g-4">
          {skills.map((skill, i) => (
            <div key={i} className="col-md-4 col-sm-6">
              <Motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="fw-semibold">{skill}</h4>
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
