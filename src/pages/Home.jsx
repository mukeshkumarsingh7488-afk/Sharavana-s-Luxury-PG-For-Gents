import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Facilities from "../components/Facilities";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import GoogleReviews from "../components/GoogleReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Pricing />
        <Gallery />
        <GoogleReviews />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
