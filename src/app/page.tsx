import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import ResultPage from "./result/page";
import ProcessPage from "./process/page";
import TestimonialPage from "./testimonial/page";
import QuickAction from "./quickAction/page";
import PricingPage from "./pricing/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
     <HeroPage/> 
     <AboutPage/>
     <ServicePage/> 
     <ResultPage/> 
     <ProcessPage/> 
     <TestimonialPage/> 
     <QuickAction/> 
     <PricingPage/>  
     <ContactPage/>  
    </div>
  );
}
