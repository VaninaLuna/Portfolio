import './../assets/css/TarjetasMe.css';
import Lottie from 'lottie-react';
import flechaAnimation from '../assets/animations/flecha.json';
import Terminal from './Terminal';

export default function TarjetasMe() {

    const description1 = "Full-stack developer with curiosity and talent for design. "
        + "I'm passionate about bringing the technical and visual aspects of digital products to life. "
        + "I care about user experience, pretty pixels and writing clean, accessible and human code. "
        + "I like details. And as a follower of John Maeda's Laws of Simplicity, I agree that less is more.";
    const description2 = "I am a programming technician from the National Technological University (Mendoza-Argentina), "
        + "I have certified courses in legacy JavaScript algorithms and data structure. "
        + "I have extensive knowledge of HTML, CSS, JS, React and Java.";
    const description3 = "I'm happiest when I'm creating, learning, exploring and thinking about how to improve things. "
        + "I'm available for freelance work, feel free to contact me and say hi. I promise I won't bite 😉";

    return (
        <div className="card-container">
            <Lottie
                animationData={flechaAnimation}
                loop={true}
                className='flechaAnimation'
            />
            <div id="about-me-card" className="custom-card custom-card1 card-align-left">
                <Terminal title="AboutMe" description={description1} scrollToContact={false} />
            </div>
            <br />
            <div className="custom-card custom-card2 card-align-center" title="Technical Skills">
                <Terminal title="TechnicalSkills" description={description2} scrollToContact={false} />
            </div>
            <br />
            <div className="custom-card custom-card3 card-align-right" title="Contact Me">
                <Terminal title="ContactMe" description={description3} scrollToContact={true} />
            </div>
        </div>
    );
}
