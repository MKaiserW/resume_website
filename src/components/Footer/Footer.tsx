import "./Footer.css"
import Github_Logo from "@/assets/github-mark-white.svg"
import LinkedIn_Logo from "@/assets/LinkedIn_icon.svg"

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
                        onClick={() => scrollToSection("Skills")}
                    >
                        About Me
                    </h3>
                    <h3
                        className="footer-text-link"
                        onClick={() => scrollToSection("Skills")}
                    >
                        Contact Me
                    </h3>
                </div>
            </div>
        </section>
    )
}
