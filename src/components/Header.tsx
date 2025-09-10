//import { Link } from 'react-router-dom';
import "../styles/header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container">
        <header className="header">
            <nav className="nav">
                <ul className="list">
                    <li><Link to="/">Aplicativos</Link></li>
                    <li><Link to="/certificates">Diploma y Certificaciones</Link></li>
                    <li><Link to="/experience">Experiencia Laboral</Link></li>
                    <li><Link to="/curriculumvitae">Hoja de vida</Link></li>
                </ul>
                <button className="menu-btn">☰</button>
            </nav>
        </header>
    </div>
  )
}
