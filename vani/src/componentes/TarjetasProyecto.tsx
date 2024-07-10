import './../assets/css/CardProject.css';
import deliveryImage from './../assets/imagenes/delivery.png';
import reconocimientoImage from './../assets/imagenes/reconocimiento.png';
import musicalImage from './../assets/imagenes/musical.png';
import videoImage from './../assets/imagenes/videojuegos.png';
import { useTranslation } from 'react-i18next';

export default function TarjetasProyecto() {
    const { t } = useTranslation()

    const proyectos = [
        {
            title: t('projects.subtitle1'),
            image: videoImage,
            description: t('projects.description1'),
            link: "https://github.com/VaninaLuna/Tienda-videojuegos"
        },
        {
            title: t('projects.subtitle2'),
            image: reconocimientoImage,
            description: t('projects.description2'),
            link: "https://github.com/GrupoNmii/Reconocimiento-Facial"
        },

        {
            title: t('projects.subtitle3'),
            image: musicalImage,
            description: t('projects.description3'),
            link: "https://github.com/VaninaLuna/tienda-instrumentos"
        },

        {
            title: t('projects.subtitle4'),
            image: deliveryImage,
            description: t('projects.description4'),
            link: "https://github.com/VaninaLuna/BuenSabor-M"
        },

    ];

    return (
        <>
            <div className="portfolio__container">
                <div className="portfolio__elements">
                    {proyectos.map((proyecto, index) => (

                        <div className="card__portfolio" key={index}>
                            <img
                                src={proyecto.image}
                                alt={proyecto.title}
                                height={130}
                                width={332}
                                loading="lazy"
                            />

                            <div className="descripcion__container">
                                <h2 className="card__title">{proyecto.title}</h2>
                                <div className="descripcion">
                                    <p>{proyecto.description}</p>
                                    <div className="buttons">
                                        <a href={proyecto.link} target='_blank'>
                                            <span>
                                                Github
                                                {(<i className='icon-link pi pi-github' />)}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );
}
