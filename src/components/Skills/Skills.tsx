import './Skills.css';
import bashIcon from '@assets/bash_icon.svg';
import flaskIcon from '@assets/flask_icon.svg';
import awsIcon from '@assets/aws_icon.svg';
import scrumIcon from '@assets/ScrumMaster-Badge.png';

const SkillsSection = () => {
    const columns = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                { name: "ViteJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Matlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Perl", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" },
                { name: "Bash", icon: bashIcon },
                { name: "Flask", icon: flaskIcon },
            ]
        },
        {
            title: "Tools and Certifications",
            skills: [
                { name: "Cloud Practitioner", icon: awsIcon },
                { name: "Developer Associate", icon: awsIcon },
                { name: "Scrum Master", icon: scrumIcon },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
                { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg"},
            ]
        }
    ];

    return (
        <div id='Skills' className="skills-container">
            <h3 className="section-header">Qualifications</h3>
            <div className="skills-grid">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="skills-column">
                        <h3 className="column-title">{column.title}</h3>
                        <div className="skills-icon-grid">
                            {column.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} icon`}
                                        className="skill-icon"
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SkillsSection;