import terminal from './../assets/css/terminal.module.css';
import { ReactNode } from 'react';

interface TerminalProps {
    title: ReactNode;
    description: ReactNode;
    scrollToContact: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ title, description, scrollToContact }) => {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={terminal.terminal}>
            <div className={terminal.header}>
                <div className={terminal.close}>✕</div>
                <div className={terminal.minimize}>—</div>
                <div className={terminal.maximize}>⇿</div>
            </div>
            <div className={terminal.body}>
                <div className={terminal.user__line}>
                    <span className={terminal.user__name}>vaninaLuna@root: </span>
                    <span className={terminal.separator}>~</span>$ .{title}
                </div>
                <div className={terminal.content}>
                    <div className={terminal.terminal__skills}>
                        <div className={terminal.terminal__skills__container}>
                            <p>{description}</p>
                            {scrollToContact && <strong onClick={handleScrollToContact} id='touch'>Get In Touch</strong>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Terminal;