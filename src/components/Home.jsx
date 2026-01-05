import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container text-center">
        <Motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="accent">Vishal</span>
        </Motion.h1>

        <Motion.p
          className="fs-5 text-light mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          React JS Developer building modern & scalable web applications.
        </Motion.p>

        <Motion.div
          className="d-flex justify-content-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a  href="/vishal-portfolio/vishalDevIT.pdf" download className="btn btn-outline-info px-4">
            Download Resume
          </a>

          <a href="https://github.com/VishalSL2004" target="_blank">
            <FaGithub size={34} color="white" />
          </a>

          <a href="https://www.linkedin.com/in/vishal-sl-642051285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <FaLinkedin size={34} color="#38bdf8" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
