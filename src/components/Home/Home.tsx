import HeroSection from '../Hero/HeroSection';
import MenuBar from '../MenuBar/MenuBar';
import Skills from "../Skills/Skills"
import AboutMe from "../AboutMe/AboutMe"
import ContactMe from "../ContactMe/ContactMe"


function Home() {
    return (
        <>
            <MenuBar />
            <HeroSection />
            <Skills />
            {/* <AboutMe /> */}
            <ContactMe />
        </>
    );
}

export default Home;