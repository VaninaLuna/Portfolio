import { useState } from 'react';
import './../assets/css/Contacto.css';
import contactImage from './../assets/imagenes/cv.jpg'; // Reemplaza con la ruta correcta de tu imagen

export default function Contacto() {
    const [isShaking, setIsShaking] = useState(false);

    const handleMouseEnter = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500); // Duración de la animación
    };
    return (
        <section id="contact" className='contact-section'>
            <br />
            <div className={`contact-container ${isShaking ? 'shake' : ''}`}>
                <div className="contact-content">
                    <h1>Get In Touch</h1>
                    <p>Want to say hi, ask me for my resume or see if we can do something awesome together?</p>
                    <p>I'd love to hear from you.</p>
                    <p>Pop me an email at hi<strong><a href="mailto: vani.lunaa@gmail.com"> vani.lunaa@gmail.com</a></strong> or give me a shout on social media.</p>
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
