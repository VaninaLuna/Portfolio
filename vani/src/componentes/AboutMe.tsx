import TarjetasMe from "./TarjetasMe";
import './../assets/css/AboutMe.css'
import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();
    return (
        <section id="aboutme" className='about-me-section'>
            <div id="who-container">
                <p className='rock-salt-regular section-title who-cover'
                    id='who-is-vanina'>
                    {t('aboutMe.title')}
                </p>
            </div>
            <TarjetasMe />
        </section>
    );
}