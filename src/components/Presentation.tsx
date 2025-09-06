import "../styles/presentacion.css";

export const Presentation = () => {
  return (
    <div className="conteiner">
        <img className="photo" src="assets/foto2.png" alt="photo" />
        <div className="personal-info">
            <h1> Jaime Andres Villar Jaramillo</h1>
            <h1 className="profession">INGENIERO DE SISTEMAS</h1>
        </div>
        <h2>Interes profesional: </h2>
        <p className="paragraph">Conseguir la experiencia suficiente para ser un programador <br /> 
            senior y conseguir ayudar a mas ingenieros junior a logras sus objetivos como mentor
        </p>
        <h2>Contactos</h2>
        <div className="contact">
            <h2>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jaimevvvjjj@gmail.com" target="_blank" rel="noopener noreferrer">
                    Jaimevvvjjj@gmail.com
                </a>
            </h2>
            <h2 className="phone">
            <a href="tel:+573143036317">314 3036317</a>
            </h2>
        </div>
        <h2 >Enlaces Profecionales</h2>
        <div className="link">
            <h2>Linkedin: Jaime (Andres) Villar Jaramillo </h2>
            <a href="https://www.linkedin.com/in/jaime-villar-jaramillo-b732632b4/">IR AL SITIO</a>
        </div>
        <div className="link">
            <h2>GitHub: JaimeVillarJ </h2>
            <a href="https://github.com/JaimeVillarJ?tab=repositories">IR AL SITIO</a>
        </div>
    </div>
  )
}
