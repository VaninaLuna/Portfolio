import './../assets/css/TarjetasProyectos.css';
import deliveryImage from './../assets/imagenes/delivery.png';
import reconocimientoImage from './../assets/imagenes/reconocimiento.png';
import musicalImage from './../assets/imagenes/musical.png';
import videoImage from './../assets/imagenes/videojuegos.png';

export default function TarjetasProyecto() {
    const proyectos = [
        {
            title: "Supercita Store",
            image: videoImage,
            // description1: "Tienda de video juego, que permite venta y compra de articulos gamers, loguin de usuarios y ranking de ventas, desarrollada en Springboot",
            description: "Video game store, allowing sale and purchase of gamers items, user login and sales ranking, developed in Springboot.",
            link: "https://github.com/VaninaLuna/Tienda-videojuegos"
        },
        {
            title: "Facial Recognition ",
            image: reconocimientoImage,
            // description1: "Ingreso para cualquier plataforma mediante reconocimiento facial, manejo de registros y roles desarrollado en Python",
            description: "Login for any platform using facial recognition, log management and roles developed in Python.",
            link: "https://github.com/GrupoNmii/Reconocimiento-Facial"
        },

        {
            title: "Hendrix Store",
            image: musicalImage,
            // description1: "Tienda de instrumentos musicales con manejo de Dashboard, carrito de compras con integracion de mercado pago y loguin de acceso encriptado",
            description: "Musical instruments store with Dashboard management, shopping cart with Mercado Pago integration and encrypted login.",
            link: "https://github.com/VaninaLuna/tienda-instrumentos"
        },

        {
            title: "Buen Sabor",
            image: deliveryImage,
            // description1: "Es un delivery de comida rapida con manejo de Dashboard,carrito de compras con integracion de mercado pago, posee loguin en auth0 y manejo de roles",
            description: "It is a fast food delivery with Dashboard management, shopping cart with payment market integration, has auth0 login and role management.",
            link: "https://github.com/VaninaLuna/BuenSabor-M"
        },

    ];

    return (
        <div className="projects-container" >
            {proyectos.map((proyecto, index) => (
                <div className="project-card" key={index}>
                    <div className="project-card-inner">
                        <div className="project-card-front">
                            <img src={proyecto.image} alt={proyecto.title} />
                            <div className="project-card-content">
                                <h3>{proyecto.title}</h3>
                                <p>{proyecto.description}</p>
                            </div>
                        </div>
                        <div className="project-card-back">
                            <img src={proyecto.image} alt={proyecto.title} />
                            <div className="project-card-content">
                                <h3>{proyecto.title}</h3>
                                <a href={proyecto.link} target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
