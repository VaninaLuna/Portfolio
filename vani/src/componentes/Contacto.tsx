import { useState } from 'react';
import './../assets/css/Contacto.css';
import contactImage from './../assets/imagenes/cv.jpg'; // Reemplaza con la ruta correcta de tu imagen
import { useTranslation } from 'react-i18next';

export default function Contacto() {
    const [isShaking, setIsShaking] = useState(false);
    const { t } = useTranslation();

    const handleMouseEnter = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500); // Duración de la animación
    };
    return (
        <section id="contact" className='contact-section'>
            <br />
            <div className={`contact-container ${isShaking ? 'shake' : ''}`}>
                <div className="contact-content">
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.description1')}</p>
                    <p>{t('contact.description2')}</p>
                    <p>{t('contact.description3')}<strong><a href="mailto: vani.lunaa@gmail.com"> vani.lunaa@gmail.com</a></strong> {t('contact.description4')}</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/vanilunita/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vanina-luna-60886b1b0/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="contact-image">
                    <img src={contactImage} alt="Contact" onMouseEnter={handleMouseEnter} />
                </div>
            </div>
        </section>
    );
}
