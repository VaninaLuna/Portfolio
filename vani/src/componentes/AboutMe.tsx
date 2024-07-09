import TarjetasMe from "./TarjetasMe";
import './../assets/css/AboutMe.css'

export default function AboutMe() {
    return (
        <section id="aboutme" className='about-me-section'>
            <div id="who-container">
                <p className='rock-salt-regular section-title who-cover'
                    id='who-is-vanina'>
                    Who Is Vanina?
                </p>
            </div>
            <TarjetasMe />
        </section>
    );
}