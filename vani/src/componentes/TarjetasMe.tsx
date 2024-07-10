import './../assets/css/TarjetasMe.css';
import Lottie from 'lottie-react';
import flechaAnimation from '../assets/animations/flecha.json';
import Terminal from './Terminal';
import { useTranslation } from 'react-i18next';

export default function TarjetasMe() {

    const { t } = useTranslation();

    const description1 = t('aboutMe.description1');
    const description2 = t('aboutMe.description2');
    const description3 = t('aboutMe.description3');

    return (
        <div className="card-container">
            <Lottie
                animationData={flechaAnimation}
                loop={true}
                className='flechaAnimation'
            />
            <div id="about-me-card" className="custom-card card-align-left">
                <Terminal title={t('aboutMe.subtitle1')} description={description1} scrollToContact={false} />
            </div>
            <br />
            <div className="custom-card card-align-center" title="Technical Skills">
                <Terminal title={t('aboutMe.subtitle2')} description={description2} scrollToContact={false} />
            </div>
            <br />
            <div className="custom-card card-align-right" title="Contact Me">
                <Terminal title={t('aboutMe.subtitle3')} description={description3} scrollToContact={true} />
            </div>
        </div>
    );
}
