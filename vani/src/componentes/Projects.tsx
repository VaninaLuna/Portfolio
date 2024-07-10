import Skills from "./Skills&Tools";
import TarjetasProyecto from "./TarjetasProyecto";
import './../assets/css/Projects.css'
import { useTranslation } from "react-i18next";

export default function Projects() {

    const { t } = useTranslation();
    return (
        <section id="project" className='projects-section'>
            <div id='project-container'>
                <h1 className="section-title rock-salt-regular">{t('projects.title')}</h1>
                <br />
                <TarjetasProyecto />
                <br />
                <br />
                <h1>{t('skills.title')}</h1>
                <p className="skills-description" >{t('skills.subtitle')}</p>
                <Skills />
            </div>
        </section>
    );
}