import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { cibGithub } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import Confetti from 'react-confetti';
import Lottie from 'lottie-react';
import heartsAnimation from '../assets/animations/hearts.json';
import lettersAnimation from '../assets/animations/letters2.json';
import glassesAnimation from '../assets/animations/glasses.json';
import { Presentation } from '../componentes/Presentation';
import AboutMe from '../componentes/AboutMe';
import Projects from '../componentes/Projects';
import Contacto from '../componentes/Contacto';
import './../assets/css/Home.css';

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


    return (
        <>
            <div className='container'>
                <Presentation setShowConfetti={setShowConfetti}
                    setShowLetters={setShowLetters}
                    setShowHearts={setShowHearts}
                    setShowGlasses={setShowGlasses} />

                <br />
                <AboutMe />
                <div className="torn-effect-top"></div>
                <Projects />
                <div className="torn-effect-bottom"></div>
                <Contacto />
            </div>
            <footer>
                <p>Designed & coded with 💜 by Vanina Luna</p>
                <p>
                    <span id='all-rights'>© 2024  |  All rights reserved</span>
                    <a href="https://github.com/VaninaLuna/" target="_blank">
                        <CIcon icon={cibGithub} size="custom-size" id='git-icon' />
                    </a>
                </p>
            </footer>

            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            {showHearts && (
                <Lottie
                    animationData={heartsAnimation}
                    loop={true}
                    className='lottie-common'
                    id='lottie-heart'
                />
            )}
            {showLetters && (
                <Lottie
                    animationData={lettersAnimation}
                    loop={true}
                    className='lottie-common'
                    id='lottie-code'
                />
            )}
            {showGlasses && (
                <Lottie
                    animationData={glassesAnimation}
                    loop={true}
                    className='lottie-common'
                    id='lottie-search'
                />
            )}

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

