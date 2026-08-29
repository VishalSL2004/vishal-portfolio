import { Modal, Button } from "react-bootstrap";
import { motion as Motion } from "framer-motion";

export default function ExperienceModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="glass-card"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="text-white">
          Work Experience
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-black mb-1">Full Stack Developer</h4>
          <p className="text-info fw-semibold mb-1">
            Tata Consultancy Services (TCS)
          </p>
          <p className="text-dark mb-4">
            SEP 2024 – Present
          </p>

          <h6 className="text-black mb-2">Point of Sale (POS) Application</h6>
          <ul className="text-dark ps-3 mb-4">
            <li>
              Contributed to one of the largest frontend projects in the
              organization, leading UI migration of legacy interfaces into
              responsive React.js components.
            </li>
            <li>
              Built and maintained scalable, reusable UI components using
              React.js, JavaScript, HTML, and CSS.
            </li>
            <li>
              Improved application performance through component
              optimization, resulting in a smoother UI/UX.
            </li>
            <li>
              Collaborated with backend teams to integrate REST APIs into
              the frontend.
            </li>
          </ul>

          <h6 className="text-black mb-2">Self-Checkout (SCO) System</h6>
          <ul className="text-dark ps-3 mb-4">
            <li>
              Delivered core features including configuration, bottle fee,
              gift receipt, loyalty, and customer camera recording using
              React.js.
            </li>
            <li>
              Converted the React.js web app into a native Android APK
              using Capacitor, gaining hands-on experience with Android
              Studio and ADB.
            </li>
            <li>
              Wrote custom Capacitor plugins and resolved critical
              production issues across web and native platforms.
            </li>
          </ul>

          <h6 className="text-black mb-2">Backoffice Web Application</h6>
          <ul className="text-dark ps-3 mb-4">
            <li>
              Led UI migration using Angular and SCSS, independently
              upskilling in both technologies.
            </li>
          </ul>

          <h6 className="mb-2 text-black">
            Warehouse Management System — Endpoint Reliability Monitor
          </h6>
          <ul className="text-dark ps-3 mb-0">
            <li>
              Built a real-time monitoring dashboard to track the health
              and uptime of critical backend endpoints in a Warehouse
              Management System.
            </li>
            <li>
              Implemented automated polling every 5 seconds to check
              endpoint status and detect downtime in near real-time.
            </li>
            <li>
              Developed automatic email alerting to notify the team
              instantly when an endpoint went down, reducing incident
              response time.
            </li>
          </ul>
        </Motion.div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-info" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}