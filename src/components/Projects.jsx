import { motion as Motion } from "framer-motion";

const projects = [
  { title: "Strong Password generator", desc: "generating Strong Password", links: "https://vishalsl2004.github.io/password-generator-react/#/" },
  { title: "E-Commerce App", desc: "Ecommerce with redux", links: "https://vishalsl2004.github.io/Ecommerce-Redux/" },
  { title: "CRUD", desc: "CRUD Application using Redux",  links: "https://vishalsl2004.github.io/CRUD-Redux/" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        {/* TITLE */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">
              My <span className="accent">Projects</span>
            </h2>
          </div>
        </div>


        {/* GRID */}
        <div className="row g-4 justify-content-center mb-4">
          {projects.map((p, index) => (
            <div
              key={index}
              className="
                col-12        /* mobile */
                col-md-6      /* tablet */
                col-lg-4      /* laptop */
              "
            >
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
