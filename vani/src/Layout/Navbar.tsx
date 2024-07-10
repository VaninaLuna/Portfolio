import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import './../assets/css/Navbar.css';
import logo from './../assets/imagenes/logoVani.png';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
    activeSection: string
    setActiveSection: (sectionId: string) => void;
};

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('English');

    const items = [
        {
            label: t('navbar.home'),
            icon: 'pi pi-home',
            command: () => {
                const sectionId = document.getElementById('presentation')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'home' ? 'active' : '',
        },
        {
            label: t('navbar.about'),
            icon: 'pi pi-star',
            command: () => {
                const sectionId = document.getElementById('aboutme')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'aboutme' ? 'active' : '',
        },
        {
            label: t('navbar.projects'),
            icon: 'pi pi-search',
            command: () => {
                const sectionId = document.getElementById('project')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'project' ? 'active' : '',
        },
        {
            label: t('navbar.contact'),
            icon: 'pi pi-envelope',
            command: () => {
                const sectionId = document.getElementById('contact')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'contact' ? 'active' : '',
        },

        {
            label: language,
            icon: 'pi pi-language',
            command: () => { changeLanguage() },
        }
    ];

    const start = <img alt="logo" src={logo} className="navbar-logo"></img>;

    const changeLanguage = () => {
        const lng = language === 'English' ? 'es' : 'en';
        const newLng = language === 'English' ? 'Español' : 'English'
        setLanguage(newLng);
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const handleHashChange = () => {
            setActiveSection(window.location.hash.substring(1));
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const end = (
    //     <div className="language-buttons">
    //         <button onClick={() => changeLanguage('en')}>EN</button>
    //         <button onClick={() => changeLanguage('es')}>ES</button>
    //     </div>
    // );

    return (
        <div className="card-navbar">
            <Menubar model={items} end={start} className="custom-menubar" />
        </div>
    );
}
