import "../styles/projects.css";
import { images } from "../Database/DB.json";

export const Projects = () => {
  const db = images;

  return (
    <div className="projects">
      <div className="title">
        <h1>APLICATIVOS</h1>
        <p>🌟 Preciona en la aplicacion que deseas ver 🌟</p>
        <p>( Algunos proyectos demoran en cargar los datos, por favor tener paciencia 😅 )</p>
      </div>
      <div className="cataloge">
        {db.map((item, index) => (
          <div className="elements" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="images"
                src={`assets/proyects/${item.image}.png`}
                alt={item.description}
              />
            </a>
            <p className="paragraph-images">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
