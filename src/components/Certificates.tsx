import "../styles/certificates.css";
import { certificates } from "../Database/DB.json";

export const Certificates = () => {

    const images = certificates; 

    return (
        <div className="container-certificates">
            <h1 className="title-certificates">Diploma y Certificaciones</h1>
            {images.map((item) => (
                <>
                    <h1 className="language">{item.name}</h1>
                    <img className="images-certificates" src={`assets/certificates/${item.image}.png`} alt="" />
                </>
            ))}
        </div>
    )
}
