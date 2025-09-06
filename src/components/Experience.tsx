import "../styles/experience.css";

export const Experience = () => {
  return (
    <div className="experience-container">
        <h1 className="experience-title">Experiencia Laboral</h1>

        <div className="experience-item">
          <h2 className="experience-subtitle">Instalación de infraestructura de sala de sistemas (1 mes)</h2>
          <p className="experience-text">
              Se instaló toda la infraestructura para una sala de sistemas de un colegio que contaba con 20 computadores.<br />
              Se configuraron los computadores para el uso adecuado de estos por los niños,<br /> 
              además de dejarlos con sus respectivos puntos de red.
          </p>
        </div>

        <div className="experience-item">
          <h2 className="experience-subtitle">Prácticas como analista de datos en Tigo Colombia (6 meses)</h2>
          <p className="experience-text">
              Durante 6 meses como practicante en el Politécnico Grancolombiano me desempeñé como <b>analista de datos</b>,<br/>
              apoyando el seguimiento de estrategias de publicidad, ventas de chips y cumplimiento de metas mensuales y semanales.<br/>
              Para ello, desarrollé <b>tableros e indicadores en Excel y Power BI</b>,<br/>
              utilizando consultas en <b>SQL</b> para organizar y visualizar la información de forma estratégica<br/>
              y facilitar la toma de decisiones oportunas.
          </p>
        </div>

        <div className="experience-item">
          <h2 className="experience-subtitle">Auxiliar de Control y Optimización de Inventarios (4 meses)</h2>
          <p className="experience-text">
              Durante 4 meses trabajé en un supermercado apoyando la gestión de inventario,<br/>
              donde implementé procesos de organización y control del stock mediante herramientas digitales.<br/>
              Me encargué de la liquidación de productos considerando el precio de mercado y el costo de adquisición,<br/>
              optimizando la toma de decisiones y garantizando una administración más eficiente desde el enfoque de ingeniería de sistemas.
          </p>
        </div>

        <div className="experience-item">
          <h2 className="experience-subtitle">Desarrollador IT y Programador (2 meses)</h2>
          <p className="experience-text">
              Durante 2 meses participé en el desarrollo de un aplicativo para una empresa dedicada a inversiones,<br/>
              encargada de la gestión financiera de varias compañías.<br/>
              Trabajé en la programación utilizando <b>React, TypeScript y CSS</b>,<br/>
              con especial enfoque en la seguridad, implementando prácticas de encriptación de datos de usuario<br/>
              y medidas para proteger la página web de filtraciones de información sensible.
          </p>
        </div>

        <div className="experience-item">
          <h2 className="experience-subtitle">Soporte de infraestructura de redes (6 meses)</h2>
          <p className="experience-text">
              Durante 6 meses trabajé como soporte de infraestructura en la Subred de Salud Sur en Colombia,<br/>
              encargándome de dar soluciones a incidencias de red relacionadas con cableado, dispositivos y equipos de rack.<br/>
              Además, gestioné el inventario tecnológico, realicé configuraciones de switches,<br/>
              he realizado varios peinados de racks e instalé puntos de red para garantizar la continuidad y eficiencia de los servicios.
          </p>
        </div>
    </div>
  )
}
