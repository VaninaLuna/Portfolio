import { useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import './../assets/css/Navbar.css';
import logo from './../assets/imagenes/logoVani.png';

type NavbarProps = {
    activeSection: string
    setActiveSection: (sectionId: string) => void;
};

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                const sectionId = document.getElementById('home')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'home' ? 'active' : '',
        },
        {
            label: 'About Me',
            icon: 'pi pi-star',
            command: () => {
                const sectionId = document.getElementById('aboutme')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'aboutme' ? 'active' : '',
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            command: () => {
                const sectionId = document.getElementById('project')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'project' ? 'active' : '',
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            command: () => {
                const sectionId = document.getElementById('contact')
                if (sectionId)
                    sectionId.scrollIntoView({ behavior: 'smooth' })
            },
            className: activeSection === 'contact' ? 'active' : '',
        },
    ];

    const start = <img alt="logo" src={logo} className="navbar-logo"></img>;

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

    return (
        <div className="card-navbar">
            <Menubar model={items} end={start} className="custom-menubar" />
        </div>
    );
}
