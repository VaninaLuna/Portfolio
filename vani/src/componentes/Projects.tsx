import Skills from "./Skills&Tools";
import TarjetasProyecto from "./TarjetasProyecto";
import './../assets/css/Projects.css'

export default function Projects() {
    return (
        <section id="project" className='projects-section'>
            <div id='project-container'>
                <h1 className="section-title rock-salt-regular">Projects</h1>
                <br />
                <TarjetasProyecto />
                <br />
                <br />
                <h1>Skills & Tools</h1>
                <p className="skills-description" >The skills, tools and technologies I use to bring to life :</p>
                <Skills />
            </div>
        </section>
    );
}