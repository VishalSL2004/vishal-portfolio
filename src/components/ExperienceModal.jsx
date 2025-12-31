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
          <h4 className="text-white mb-1">React.js Developer</h4>
          <p className="text-info fw-semibold mb-1">
            Tata Consultancy Services (TCS)
          </p>
          <p className="text-dark mb-4">
            SEP 2024 – Present
          </p>

          <ul className="text-dark ps-3">
            <li>
              Developed and maintained responsive web applications using
              React.js, JavaScript, and REST APIs.
            </li>
            <li>
              Improved application performance by optimizing components,
              resulting in smoother UI/UX.
            </li>
            <li>
              Collaborated with backend teams to integrate APIs into the
              frontend.
            </li>
            <li>
              Participated in Agile sprints and daily stand-ups for effective
              project delivery.
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
