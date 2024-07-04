import { Card } from 'primereact/card';
import './../assets/css/TarjetasMe.css';
import Lottie from 'lottie-react';
import flechaAnimation from '../assets/animations/flecha.json';

export default function TarjetasMe() {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="card-container">
            <Card id="about-me-card" className="custom-card custom-card1 card-align-left" title="About Me" subTitle="">
                <p><strong>Full-stack developer with curiosity and talent for design.
                    I'm passionate about bringing the technical and visual aspects of digital products to life.
                    I care about user experience, pretty pixels and writing clean, accessible and human code.
                    I like details. And as a follower of John Maeda's Laws of Simplicity,
                    I agree that less is more.</strong></p>
            </Card>
            <br />
            <Lottie
                animationData={flechaAnimation}
                loop={true}
                className='flechaAnimation'
            />

            <Card className="custom-card custom-card2 card-align-center" title="Technical Skills" subTitle="">
                <p><strong>I am a programming technician from the National Technological University (Mendoza-Argentina),
                    I have certified courses in legacy JavaScript algorithms and data structure.
                    I have extensive knowledge of HTML, CSS, JS, React and Java.</strong></p>
            </Card>

            <br />

            <Card className="custom-card custom-card3 card-align-right" title="Contact Me" subTitle="">
                <p> <strong>I'm happiest when I'm creating, learning, exploring and thinking about how to improve things.
                    I'm available for freelance work, feel free to contact me and say hi.
                    I promise I won't bite 😉</strong>
                    <p> <strong onClick={handleScrollToContact} id='touch'>Get In Touch</strong></p>

                </p>
            </Card>

            <br />
        </div>
    );
}
