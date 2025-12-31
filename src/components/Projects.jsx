import { motion as Motion } from "framer-motion";

const projects = [
  { title: "Strong Password generator", desc: "generating Strong Password", links: "https://vishalsl2004.github.io/password-generator-react/#/" },
  { title: "E-Commerce App", desc: "Ecommerce with redux", links: "https://vishalsl2004.github.io/Ecommerce-Redux/" },
  { title: "CRUD", desc: "CRUD Application using Redux",  links: "https://vishalsl2004.github.io/CRUD-Redux/" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        My <span className="accent">Projects</span>
      </h2>

      <div className="container">
        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Motion.div
                className="glass-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <a href={p.links} target="_blank">
                    <h4>{p.title}</h4>
                <p className="text-light mt-2">{p.desc}</p>
                </a>
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
