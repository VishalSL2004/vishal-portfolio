import { motion as Motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "SQL",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* TITLE */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">
              My <span className="accent">Skills</span>
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="row g-4 justify-content-center mb-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                col-12        /* mobile: 1 column */
                col-sm-6      /* small mobile: 2 columns */
                col-md-4      /* tablet: 3 columns */
                col-lg-3      /* laptop: 4 columns */
              "
            >
              <Motion.div
                className="glass-card h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h5>{skill}</h5>
              </Motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
