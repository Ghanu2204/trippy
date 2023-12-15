import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/images/2.jpg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
