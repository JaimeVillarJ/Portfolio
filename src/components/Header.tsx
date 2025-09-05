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
                    <li><Link to="/certificates">Certificaciones</Link></li>
                    <li>Experiencia</li>
                    <li>Hoja de vida</li>
                </ul>
                <button className="menu-btn">☰</button>
            </nav>
        </header>
    </div>
  )
}
