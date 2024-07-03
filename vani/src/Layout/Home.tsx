import { useState, useEffect } from 'react';
import ColorBackground from '../componentes/colorBackground';
import Confetti from 'react-confetti';
import Lottie from 'lottie-react';
import heartsAnimation from '../assets/animations/hearts.json';
import lettersAnimation from '../assets/animations/letters.json';
import glassesAnimation from '../assets/animations/glasses.json';
import TarjetasMe from '../componentes/TarjetasMe';
import TarjetasProyecto from '../componentes/TarjetasProyecto';
import Contacto from '../componentes/Contacto';
import { Button } from 'primereact/button';
import './../assets/css/Home.css';
import Skills from '../componentes/Skills&Tools';
import CIcon from '@coreui/icons-react';
import { cibGithub } from '@coreui/icons';

type HomeProps = {
    setActiveSection: (sectionId: string) => void;
};

export function Home({ setActiveSection }: HomeProps) {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const [showLetters, setShowLetters] = useState(false);
    const [showGlasses, setShowGlasses] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [setActiveSection]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const leftContent = (
        <div>
            {/* <h1 style={{ color: "black" }}>Welcome to My Portfolio</h1> */}
        </div>
    );

    const rightContent = (
        <>
            <h1 className='rock-salt-regular'>Hi, I'm Vanina</h1>
            <br />
            <div className='rammetto-one-regular'>
                <p>
                    I enjoy creating&nbsp;
                    <span
                        className='fun-cover'
                        onMouseEnter={() => setShowConfetti(true)}
                        onMouseLeave={() => setShowConfetti(false)}
                    >
                        fun
                    </span>
                    &nbsp;and interactive projects with&nbsp;
                    <span
                        className='code-cover'
                        onMouseEnter={() => setShowLetters(true)}
                        onMouseLeave={() => setShowLetters(false)}
                    >
                        code
                    </span>.
                </p>
                <p>
                    I'm a person who&nbsp;
                    <span
                        className='loves-cover'
                        onMouseEnter={() => setShowHearts(true)}
                        onMouseLeave={() => setShowHearts(false)}
                    >
                        loves
                    </span>
                    &nbsp;to&nbsp;
                    <span
                        className='research-cover'
                        onMouseEnter={() => setShowGlasses(true)}
                        onMouseLeave={() => setShowGlasses(false)}
                    >
                        research
                    </span>
                    &nbsp;and learn constantly to provide the best.
                </p>
            </div>
        </>
    );

    return (
        <>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            {showHearts && (
                <Lottie
                    animationData={heartsAnimation}
                    loop={true}
                    style={{ position: 'absolute', top: '31%', left: '90%', transform: 'translate(-50%, -50%)', width: 200, height: 200, zIndex: 10 }}
                />
            )}
            {showLetters && (
                <Lottie
                    animationData={lettersAnimation}
                    loop={true}
                    style={{ position: 'absolute', top: '73%', left: '34%', transform: 'translate(-50%, -50%)', width: 200, height: 200, zIndex: 10 }}
                />
            )}
            {showGlasses && (
                <Lottie
                    animationData={glassesAnimation}
                    loop={true}
                    style={{ position: 'absolute', top: '35%', left: '44%', transform: 'translate(-50%, -50%)', width: 200, height: 200, zIndex: 10 }}
                />
            )}

            <div className='container'>
                <div>
                    <section id="home"></section>
                    <ColorBackground leftContent={leftContent} rightContent={rightContent} />
                </div>
                <div className='top-section' style={{ background: 'linear-gradient(to right, #007074 5%, #85b8bc 50%, #7FDAC7 95%)', marginBottom: '70px', position: 'relative' }}>
                    <br />
                    <section id="aboutme"></section>
                    <div id="who-is-vanina" style={{ position: 'absolute', top: '0', right: '150px', margin: '20px', zIndex: '2' }}>
                        <p className='rock-salt-regular' style={{ fontSize: 'xx-large' }}>Who Is Vanina?</p>
                    </div>
                    <TarjetasMe />
                </div>

                <div className="torn-effect-top"></div>

                <div className='middle-section' style={{ background: '#007074', width: '100%', height: '100vh' }}>
                    <div style={{ margin: '0 auto', maxWidth: '2000px' }}>
                        <section id="project"></section>
                        <br />
                        <TarjetasProyecto />

                        <div style={{ height: '410px' }}></div>
                        <h2>Skills & Tools</h2>
                        <p>The skills, tools and technologies I use to bring to life :</p>
                        <Skills />
                    </div>
                </div>

                <div className="torn-effect-bottom"></div>

                <div className='bottom-section' style={{ background: '#56CFC6', height: '100vh' }}>
                    <section id="contact"></section>
                    <br />
                    <Contacto />
                </div>
            </div>
            <footer>
                <p>Designed & coded with 💜 by Vanina Luna</p>
                <p>© 2024  |  All rights reserved</p>
                <p>
                    <a href="https://github.com/VaninaLuna/" target="_blank">
                        <CIcon icon={cibGithub} size="custom-size" style={{ height: '40px' }} />
                    </a>
                </p>
            </footer>
            {showScrollButton && (
                <Button
                    icon="pi pi-arrow-up"
                    rounded
                    outlined
                    severity="success"
                    aria-label="Scroll to top"
                    className="scroll-to-top-button"
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                />
            )}
        </>
    );
}
