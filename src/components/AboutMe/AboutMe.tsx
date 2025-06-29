import './AboutMe.css'
import scrumIcon from '@assets/f82608aa0419f9c94f688ae2c578fb07.png';

export default function AboutMe() {

    return (
        <section id='About'>
            <h1 className="section-header">About</h1>
            <div className="education-grid">
                <div>
                     <img
                            className="uconn-img"
                            src={scrumIcon}
                            alt="Download Resume"
                        />
                </div>
                <div style={{textAlign: 'right'}}>
                    <h2 className="sectio-header">Education</h2>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>Concentrations in Software Engineering and Systems and Networks</p>
                    <p>Minor in Mathematics </p>
                    <p>GPA 3.8 </p>
                </div>
            </div>

        </section>
    )
}
