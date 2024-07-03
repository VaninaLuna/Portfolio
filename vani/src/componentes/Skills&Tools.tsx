// import React from 'react';
//import 'primeicons/primeicons.css';
// import './../assets/css/Skills.css';

// const skills = [
//     { name: 'HTML5', icon: 'cibHtml5' },//boostrap
//     { name: 'CSS3', icon: 'pi pi-css3' },
//     { name: 'JavaScript', icon: 'cibJavascript' }, //boostrap
//     { name: 'java', icon: 'cibJava' },//boostrap
//     { name: 'React', icon: 'cibReact' }, //boostrap
//     { name: 'Git', icon: 'pi pi-share-alt' },
//     { name: 'Github', icon: 'pi pi-github' },
//     { name: 'RESTful APIs', icon: 'pi pi-api' },
//     // { name: 'Firebase', icon: 'pi pi-fire' },
//     // { name: 'SASS', icon: 'pi pi-sass' },
//     { name: 'Auth0', icon: 'cibAuth0' },
//     { name: 'VS Code', icon: 'cibVisualStudioCode' },
//     { name: 'Responsive Websites', icon: 'pi pi-desktop' },
//     { name: 'SQL', icon: 'pi pi-database' },
//     // { name: 'WordPress', icon: 'pi pi-wordpress' },
//     // { name: 'Adobe Suite', icon: 'pi pi-adobe' },
// ];

// const Skills: React.FC = () => {
//     return (
//         <div className="skills-container">
//             {skills.map(skill => (
//                 <div key={skill.name} className="skill">
//                     <i className={skill.icon} style={{ fontSize: '2em' }}></i>
//                     <p>{skill.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Skills;

// import React from 'react';
//import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa Bootstrap Icons
// import './../assets/css/Skills.css'

// const skills = [
//     { name: 'HTML5', icon: 'bi bi-filetype-html' },
//     { name: 'CSS3', icon: 'bi bi-filetype-css' },
//     { name: 'JavaScript', icon: 'bi bi-filetype-js' },
//     { name: 'jQuery', icon: 'bi bi-lightning' },
//     { name: 'React', icon: 'bi bi-lightning' },
//     { name: 'Git', icon: 'bi bi-git' },
//     { name: 'Github', icon: 'bi bi-github' },
//     { name: 'RESTful APIs', icon: 'bi bi-link-45deg' },
//     { name: 'Firebase', icon: 'bi bi-lightning' },
//     { name: 'SASS', icon: 'bi bi-lightning' },
// ];

// const Skills: React.FC = () => {
//     return (
//         <div className="skills-container">
//             {skills.map(skill => (
//                 <div key={skill.name} className="skill">
//                     <i className={skill.icon} style={{ fontSize: '2em' }}></i>
//                     <p>{skill.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Skills;

import React from 'react';
//import { CIcon } from '@coreui/icons';//
import { cibHtml5, cibJavascript, cibReact, cibGit, cibAuth0, cibJava, cibCss3, cibBuffer, cibSemaphoreci, cibTypescript, cibZeit } from '@coreui/icons';
import './../assets/css/Skills.css'
import CIcon from '@coreui/icons-react';

const skills = [
    { name: 'HTML5', icon: cibHtml5 },
    { name: 'CSS3', icon: cibCss3 },
    { name: 'JavaScript', icon: cibJavascript },
    { name: 'TypeScript', icon: cibTypescript },
    { name: 'React', icon: cibReact },
    { name: 'Java', icon: cibJava },
    { name: 'SQL', icon: cibBuffer },
    { name: 'RESTfull APIs', icon: cibSemaphoreci },
    // { name: 'Render', icon: renderIcono },
    { name: 'Git', icon: cibGit },
    { name: 'Auth0', icon: cibAuth0 },
    { name: 'Vercel', icon: cibZeit },
    // { name: 'VS Code', icon: cibVisualStudioCode },
    // { name: 'Responsive Websites', icon: cibChromecast },
]
const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            {skills.map(skill => (
                <div key={skill.name} className="skill">
                    <CIcon icon={skill.icon} size="custom-size" style={{ fontSize: '2em' }} />
                    <p>{skill.name}</p>
                </div>
            ))}
            <div key='Render' className="skill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" role="img" aria-hidden="true" style={{ fontSize: '2em' }}>
                    <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z"></path>
                </svg>
                <p>Render</p>
            </div>
        </div>
    );
};

export default Skills;
