import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import ResultPage from "./result/page";
import ProcessPage from "./process/page";
import TestimonialPage from "./testimonial/page";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
     <HeroPage/> 
     <AboutPage/>
     <ServicePage/> 
     <ResultPage/> 
     <ProcessPage/> 
     <TestimonialPage/> 
    </div>
  );
}
