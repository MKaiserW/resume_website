import './MenuBar.css';
import Logo from "@/assets/logo_bar.svg?react";
import Github_Logo from "@/assets/github-mark-white.svg?react";
import LinkedIn_Logo from "@/assets/LinkedIn_icon.svg?react";


const MenuBarSection = () => {
    return (
        <section className='menu-bar'>
            <div className="menu-wrapper">
                <div className="left-menu-bar">
                    <Logo/>
                </div>
                <div className="middle-menu-bar">
                </div>
                <div className="right-menu-bar">
                    <a href="https://github.com/MKaiserW" target="_blank" rel="noopener noreferrer">
                        <Github_Logo/>
                    </a>
                    <a href="https://www.linkedin.com/in/maximilian-wilhelm-6211661b4/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn_Logo/>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}
export default MenuBarSection