import React from 'react';
import yo from './../assets/imagenes/yodefinitiva.jfif';
import './../assets/css/Presentation.css';
import { useTranslation } from 'react-i18next';

interface Props {
    setShowConfetti: (value: boolean) => void;
    setShowLetters: (value: boolean) => void;
    setShowHearts: (value: boolean) => void;
    setShowGlasses: (value: boolean) => void;
}

export const Presentation: React.FC<Props> = ({ setShowConfetti, setShowLetters, setShowHearts, setShowGlasses }) => {
    const { t } = useTranslation();

    return (
        <section id="presentation" className="presentation-section">
            <div className="intro-description">
                <h1 className='rock-salt-regular who-cover'>🖐️<strong className='presentation-title'>{t('presentation.title')}</strong></h1>
                <div className='rammetto-one-regular'>
                    <p>
                        {t('presentation.intro1')}
                        <span
                            className='fun-cover'
                            onMouseEnter={() => setShowConfetti(true)}
                            onMouseLeave={() => setShowConfetti(false)}
                        >
                            {t('presentation.fun')}
                        </span>
                        &nbsp;{t('presentation.with')}&nbsp;
                        <span
                            className='code-cover'
                            onMouseEnter={() => setShowLetters(true)}
                            onMouseLeave={() => setShowLetters(false)}
                        >
                            {t('presentation.code')}
                        </span>.
                    </p>
                    <p>
                        {t('presentation.intro2')}
                        &nbsp;<span
                            className='loves-cover'
                            onMouseEnter={() => setShowHearts(true)}
                            onMouseLeave={() => setShowHearts(false)}
                        >
                            {t('presentation.loves')}
                        </span>&nbsp;
                        {t('presentation.to')}&nbsp;
                        <span
                            className='research-cover'
                            onMouseEnter={() => setShowGlasses(true)}
                            onMouseLeave={() => setShowGlasses(false)}
                        >
                            {t('presentation.research')}
                        </span>&nbsp;
                        {t('presentation.andLearn')}.
                    </p>
                </div>
            </div>
            <div className="intro-image">
                <img src={yo} alt="Vanina Luna" />
            </div>
        </section>
    );
};
