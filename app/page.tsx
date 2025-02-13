import Benefits from "./components/Benefits";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import PricingCard from "./components/PricingCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <HomePage/>
      <Benefits/>
      <PricingCard/>
      <ContactUs/>
      <Footer/>
  </div>

  );
}
