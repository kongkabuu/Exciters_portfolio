import HeroSection from "./sub-components/HeroSection"
import Nav from "./sub-components/Nav"


function Header() {
    return (
        <header className=" w-screen h-screen bg-hero-pattern bg-cover">
            <Nav />

            <HeroSection />


        </header>)
}

export default Header
