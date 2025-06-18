import "./Footer.css"
import Github_Logo from "@/assets/github-mark-white.svg"
import LinkedIn_Logo from "@/assets/LinkedIn_icon.svg"
import Resume_Icon from "@/assets/res_download.svg"
import { DownloadResume } from "../MenuBar/MenuBar"

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return (
        <section className="footer-main">
            <div className="footer-bottom">
                <h3 className="footer-text">Maximilian Wilhelm @{getCurrentYear()}</h3>

                <div style={{ alignContent: "center" }}>
                    <a
                        onClick={DownloadResume}
                        className="footer-links"
                    >
                        <img
                            className="footer-img"
                            src={Resume_Icon}
                            width="35"
                            height="35"
                            alt="Download Resume"
                        />
                    </a>
                    <a
                        href="https://github.com/MKaiserW"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="footer-img"
                            src={Github_Logo}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maximilian-wilhelm-6211661b4/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="footer-img"
                            src={LinkedIn_Logo}
                        />
                    </a>
                </div>

                <div>
                    <h3
                        className="footer-text-link"
                        onClick={() => scrollToSection("top")}
                    >
                        Hero Section
                    </h3>
                    <h3
                        className="footer-text-link"
                        onClick={() => scrollToSection("Skills")}
                    >
                        Qualifications
                    </h3>
                    <h3
                        className="footer-text-link"
                        onClick={() => scrollToSection("About")}
                    >
                        About Me
                    </h3>
                    <h3
                        className="footer-text-link"
                        onClick={() => scrollToSection("Contact")}
                    >
                        Contact Me
                    </h3>
                </div>
            </div>
        </section>
    )
}
