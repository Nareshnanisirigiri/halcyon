import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Symptoms from "../components/Symptoms";
import Offerings from "../components/Offerings";
import Footer from "../components/Footer";
import PainStats from "../components/PainStats";
import WhyHalcyon from "../components/WhyHalcyon";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <PainStats />
       <WhyHalcyon />
      <Services />
      <Symptoms />
      <Offerings />
      <Footer />
    </>
  );
}
