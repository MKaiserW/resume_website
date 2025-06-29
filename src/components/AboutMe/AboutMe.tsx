import './AboutMe.css'
import scrumIcon from '@assets/f82608aa0419f9c94f688ae2c578fb07.png';

export default function AboutMe() {

    return (
        <section id='About'>
            <h1 className="section-header">About</h1>
            <div className="about-container">
                <div className="about-profile-card">
                    <img
                        src={scrumIcon}
                        alt="University of Connecticut Logo"
                        className="about-university-logo"
                    />
                    <h2>University of Connecticut</h2>
                </div>

                <div>
                    <h2 className="about-education-section">Education</h2>
                    <div className="about-education-grid">
                        <div className="about-education-item">
                            <h3>Degree</h3>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                        <div className="about-education-item">
                            <h3>Concentrations</h3>
                            <p>Software Engineering<br />Systems and Networks</p>
                        </div>
                        <div className="about-education-item">
                            <h3>Minor</h3>
                            <p>Mathematics</p>
                        </div>
                        <div className="about-education-item">
                            <h3>GPA</h3>
                            <p>3.8</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
