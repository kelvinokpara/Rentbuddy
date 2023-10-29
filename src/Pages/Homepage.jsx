import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/Sections/HeroSection";

const Homepage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[70vh]">
        <section id="hero">
          <HeroSection />
        </section>
      </main>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
