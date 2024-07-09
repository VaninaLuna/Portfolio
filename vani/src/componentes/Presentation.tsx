import yo from './../assets/imagenes/yodefinitiva.jfif'
import './../assets/css/Presentation.css'

interface Props {
    setShowConfetti: (value: boolean) => void;
    setShowLetters: (value: boolean) => void;
    setShowHearts: (value: boolean) => void;
    setShowGlasses: (value: boolean) => void;
}

export const Presentation: React.FC<Props> = ({ setShowConfetti,
    setShowLetters,
    setShowHearts,
    setShowGlasses }) => {

    return (
        <section id="presentation" className="presentation-section">
            <div className="intro-description">
                <h1 className='rock-salt-regular who-cover presentation-title'>🖐️Hi, I'm Vanina</h1>
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
                        I'm a person who
                        &nbsp;<span
                            className='loves-cover'
                            onMouseEnter={() => setShowHearts(true)}
                            onMouseLeave={() => setShowHearts(false)}
                        >
                            loves
                        </span>&nbsp;
                        to&nbsp;
                        <span
                            className='research-cover'
                            onMouseEnter={() => setShowGlasses(true)}
                            onMouseLeave={() => setShowGlasses(false)}
                        >
                            research
                        </span>&nbsp;
                        and learn constantly to provide the best.
                    </p>
                </div>
            </div>
            <div className="intro-image">
                <img src={yo} alt="Vanina Luna" />
            </div>
        </section>
    );
};