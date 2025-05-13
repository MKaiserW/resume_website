import './MenuBar.css';
import Logo from "@/assets/logo.svg?react";


const MenuBarSection = () => {
    return (
        <section className='menu-bar'>
            <div className="menu-wrapper">
                <div className="left-menu-bar">
                    <Logo/>
                </div>
                <div className="middle-menu-bar">
                    {/* <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p> */}
                </div>
                <div className="right-menu-bar">
                    <p>Hello</p>

                </div>
            </div>
        </section>
    )
}
export default MenuBarSection