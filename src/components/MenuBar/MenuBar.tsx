import './MenuBar.css';
import Logo from "@/assets/logo_bar.svg";
import Github_Logo from "@/assets/github-mark-white.svg";
import LinkedIn_Logo from "@/assets/LinkedIn_icon.svg";

const MenuBarSection = () => {
    return (
        <section className='menu-bar'>
            <div className="menu-wrapper">
                <div className="left-menu-bar">
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                    />
                </div>
                <div className="middle-menu-bar">
                </div>
                <div className="right-menu-bar">
                    <a href="https://github.com/MKaiserW" target="_blank" rel="noopener noreferrer">
                        <img
                            src={Github_Logo}
                            width="35"
                            height="35"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/maximilian-wilhelm-6211661b4/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={LinkedIn_Logo}
                            width="35"
                            height="35"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default MenuBarSection