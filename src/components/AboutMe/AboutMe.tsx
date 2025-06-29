import './AboutMe.css'
import UconnLogo from '@assets/f82608aa0419f9c94f688ae2c578fb07.png';
import PrattLogo from '@assets/pngaaa.com-5399938.png';

export default function AboutMe() {

    return (
        <section id='About'>
            <h1 className="section-header">Experience</h1>
            <div className="about-container">
                <div className="about-profile-card">
                    <img
                        src={UconnLogo}
                        alt="University of Connecticut Logo"
                        className="about-logo-university"
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
            <div className="about-container-flip">
                <div>
                    <h2 className="about-education-section-pratt">Full-Stack Software Engineer</h2>
                    <div className="about-education-grid">
                        <div className="about-education-item">
                            <h3>Repair Dashboard</h3>
                            <p>Rearchitected Django Jinja based application to Vue<br/>
                                Integrated a Redis cache for grid data to improve page load times by 460%<br/> 
                                o Utilized AWS SAM to deploy scheduled Lambdas for processing data from external databases</p>
                        </div>
                        <div className="about-education-item">
                            <h3>Recognition</h3>
                            <p>Led organization-wide process transformation that improved task turn around and customer trust<br/>
                                Receives 4 awards for distinguished contributions<br/> 
                                Scrum Master for a team of 4 software developers</p>
                        </div>
                        <div className="about-education-item">
                            <h3>Skim Improvements</h3>
                            <p>Optimized queries and redesigned database to improved load time by 2166%<br/>
                            Wrote Lambda to parse 4 varieties of FEA software outputs (rst, txt, csv, xlsx) into Json  </p>
                        </div>
                        <div className="about-education-item">
                            <h3>EngineGPT</h3>
                            <p>RAG architecture to limit hallucinations and serve original documentation<br/>
                                OpenSearch Indexes to segregate export restricted data (ITAR) </p>
                        </div>
                    </div>
                </div>
                <div className="about-profile-card">
                    <img
                        src={PrattLogo}
                        alt="Pratt and Whitney Logo"
                        className="about-logo-pratt"
                    />
                    <h2 className='pratt-name'>Pratt and Whitney</h2>
                    <h4 className='pratt-name-sub'>An RTX Business</h4>
                </div>
            </div>
            <div className="about-container">
                <div className="about-profile-card">
                    <img
                        src={UconnLogo}
                        alt="University of Connecticut Logo"
                        className="about-logo-university"
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
