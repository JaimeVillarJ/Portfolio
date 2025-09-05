import "../styles/projects.css";
import { images } from "../Database/DB.json";

export const Projects = () => {

  const db = images;

  return (
    <>
      <div className="projects">
        <div className="title">
          <h1>APLICATIVOS</h1>
        </div>
        <div className="cataloge">
          {db.map((item) => (
            <>
              <div className="elements">
                <img className="images" src={`assets/proyects/${item.image}.png`} alt="" />
                <p className="paragraph-images">{item.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
