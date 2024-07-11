import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome",
            "navbar": {
                "home": "Home",
                "about": "About Me",
                "projects": "Projects",
                "contact": "Contact",
                "english": "English",
                "spanish": "Español"
            },
            "presentation": {
                "title": "Hi, I'm Vanina",
                "intro1": "I enjoy creating ",
                "intro2": "I'm a person ",
                "fun": "fun",
                "with": "and interactive projects with ",
                "code": "code",
                "loves": "loves",
                "to": "to",
                "research": "research",
                "andLearn": "and learn constantly to provide the best"
            },
            "aboutMe": {
                "title": "Who Is Vanina?",
                "subtitle1": "AboutMe",
                "subtitle2": "TechnicalSkills",
                "subtitle3": "ContactMe",
                "description1": "Full-stack developer with curiosity and talent for design. I'm passionate about bringing the technical and visual aspects of digital products to life. I care about user experience, pretty pixels and writing clean, accessible and human code. I like details. And as a follower of John Maeda's Laws of Simplicity, I agree that less is more.",
                "description2": "I am a programming technician from the National Technological University (Mendoza-Argentina), I have certified courses in legacy JavaScript algorithms and data structure. I have extensive knowledge of HTML, CSS, JS, React and Java.",
                "description3": "I'm happiest when I'm creating, learning, exploring and thinking about how to improve things. I'm available for freelance work, feel free to contact me and say hi. I promise I won't bite 😉",
                "contact": "Get in Touch",
            },
            "projects": {
                "title": "Projects",
                "subtitle1": "Supercita Store",
                "description1": "Video game store, allowing sale and purchase of gamers items, user login and sales ranking, developed in Springboot.",
                "subtitle2": "Facial Recognition",
                "description2": "Login for any platform using facial recognition, log management and roles developed in Python.",
                "subtitle3": "Hendrix Musical Store",
                "description3": "Musical instruments store with Dashboard management, shopping cart with Mercado Pago integration and encrypted login.",
                "subtitle4": "Buen Sabor",
                "description4": "It is a fast food delivery with Dashboard management, shopping cart with payment market integration, has auth0 login and role management.",
                "subtitle5": "Global News",
                "description5": "Business journal, designed to manage several companies and all the news related to each one. Developed in php.",
                "subtitle6": "Accounting entries system",
                "description6": "Accounting system that allows to make entries, load and edit charts of accounts and keep track of the movements of each year. Developed in php.",
            },
            "skills": {
                "title": "Skills & Tools",
                "subtitle": "The skills, tools and technologies I use to bring to life:"

            },
            "contact": {
                "title": "Get In Touch",
                "description1": "Want to say hi, ask me for my resume or see if we can do something awesome together?",
                "description2": "I'd love to hear from you.",
                "description3": "Pop me an email at ",
                "description4": "or give me a shout on social media.",

            }
        }
    },
    es: {
        translation: {
            "welcome": "Bienvenido",
            "navbar": {
                "home": "Inicio",
                "about": "Acerca de Mi",
                "projects": "Proyectos",
                "contact": "Contacto",
                "english": "Ingles",
                "spanish": "Español"
            },
            "presentation": {
                "title": "Hi, Soy Vanina",
                "intro1": "Disfruto creando proyectos ",
                "intro2": "Me  ",
                "fun": "divertidos",
                "with": "e interactivos con ",
                "code": "código",
                "loves": "encanta",
                "to": " ",
                "research": "investigar",
                "andLearn": "y aprender constantemente para brindar lo mejor"
            },
            "aboutMe": {
                "title": "Quien es Vanina?",
                "subtitle1": "SobreMi",
                "subtitle2": "HabilidadesTecnicas",
                "subtitle3": "ContactaMe",
                "description1": "Desarrollador full-stack con curiosidad y talento para el diseño. Me apasiona dar vida a los aspectos técnicos y visuales de los productos digitales. Me preocupo por la experiencia del usuario, los píxeles bonitos y escribir código limpio, accesible y humano. Me gustan los detalles. Y como seguidor de las Leyes de la Simplicidad de John Maeda, estoy de acuerdo en que menos es más.",
                "description2": "Soy técnico en programación de la Universidad Tecnológica Nacional (Mendoza-Argentina), tengo cursos certificados en algoritmos de JavaScript heredados y estructura de datos. Tengo amplios conocimientos de HTML, CSS, JS, React y Java.",
                "description3": "Soy más feliz cuando estoy creando, aprendiendo, explorando y pensando en cómo mejorar las cosas. Estoy disponible para trabajos freelance, no dudes en contactarme y saludar. Prometo que no muerdo 😉",
                "contact": "Ponte en Contacto",
            },
            "projects": {
                "title": "Proyectos",
                "subtitle1": "Tienda Supercita",
                "description1": "Tienda de video juego, que permite venta y compra de articulos gamers, loguin de usuarios y ranking de ventas, desarrollada en Springboot.",
                "subtitle2": "Reconocimiento Facial",
                "description2": "Ingreso para cualquier plataforma mediante reconocimiento facial, manejo de registros y roles desarrollado en Python.",
                "subtitle3": "Tienda Musical Hendrix",
                "description3": "Tienda de instrumentos musicales con manejo de Dashboard, carrito de compras con integracion de mercado pago y loguin de acceso encriptado.",
                "subtitle4": "Buen Sabor",
                "description4": "Es un delivery de comida rapida con manejo de Dashboard,carrito de compras con integracion de mercado pago, posee loguin en auth0 y manejo de roles.",
                "subtitle5": "Noticias Global",
                "description5": "Diario empresarial, diseñado para manejar varias empresas y todas las noticias relacionadas a cada una. Desarrollado en php.",
                "subtitle6": "Sistema de asientos contables",
                "description6": "Sistema de contable que permite realizar asientos, cargar y editar planes de cuentas y llevar un control de los movimientos de cada ejercicio. Desarrollado en php.",
            },
            "skills": {
                "title": "Habilidades y Herramientas",
                "subtitle": "Las habilidades, herramientas y tecnologías que utilizo para dar vida:"
            },
            "contact": {
                "title": "Ponte en contacto",
                "description1": "¿Quieres saludarme, pedirme mi currículum o ver si podemos hacer algo increíble juntos?",
                "description2": "Me encantaría saber de ti.",
                "description3": "Envíame un correo electrónico a ",
                "description4": "o buscame en mis redes sociales.",

            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // idioma predeterminado
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
