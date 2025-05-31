import "./Footer.css"
import Github_Logo from "@/assets/github-mark-white.svg"
import LinkedIn_Logo from "@/assets/LinkedIn_icon.svg"

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <section className="footer-main">
            <div className="footer-bottom">
                <h3 className="footer-text">Maximilian Wilhelm @{getCurrentYear()}</h3>

                <div style={{ alignContent: "center" }}>
                    <img
                        className="footer-img"
                        src={Github_Logo}
                        width="35"
                        height="35"
                    />
                    <img
                        className="footer-img"
                        src={LinkedIn_Logo}
                        width="35"
                        height="35"
                    />
                </div>

                <h3 className="footer-text">LinkTree</h3>
            </div>
        </section>
    )
}
