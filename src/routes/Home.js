import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImg from "../assets/12.jpg"

function Home() {
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={HomeImg}
        />
        </>
    )
}

export default Home;