import React from 'react';
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
    { name: 'Git', icon: cibGit },
    { name: 'Auth0', icon: cibAuth0 },
    { name: 'Vercel', icon: cibZeit },
]
const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            {skills.map(skill => (
                <div key={skill.name} className="skill">
                    <CIcon icon={skill.icon} size="custom-size" className="skill-icon" />
                    <p>{skill.name}</p>
                </div>
            ))}
            <div key='Render' className="skill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon skill-icon" role="img" aria-hidden="true">
                    <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z"></path>
                </svg>
                <p>Render</p>
            </div>
        </div>
    );
};

export default Skills;
