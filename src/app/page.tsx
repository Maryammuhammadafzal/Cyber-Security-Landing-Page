import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicePage from "./services/page";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
     <HeroPage/> 
     <AboutPage/>
     <ServicePage/> 
    </div>
  );
}
