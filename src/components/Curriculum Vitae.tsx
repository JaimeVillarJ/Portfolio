import "../styles/curriculum.css";
import { Download } from "lucide-react"; // librería de iconos

export const CurriculumVitae = () => {
  return (
    <div className="CV-container">
      {/* Botón flotante en esquina */}
      <a
        href="/assets/CV.pdf"
        download="CV.pdf"
        className="download-btn"
      >
        <Download size={20} />
        Download CV
      </a>

      <img className="img-cv" src="assets/CV/p1.png" alt="p1" />
      <img className="img-cv" src="assets/CV/p2.png" alt="p2" />
    </div>
  );
};
