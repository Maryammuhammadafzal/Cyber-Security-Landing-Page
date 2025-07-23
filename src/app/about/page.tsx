'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
const AboutPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile); 
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    useEffect(() => {
        Aos.refresh(); 
    }, [isMobile]);

    return (
        <div data-aos={isMobile ? 'fade-up' : 'fade-right'} className="about mb-0 w-full h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
                <div className="left md:w-[50%] w-full h-auto space-y-5">
                    <h2 className="font-semibold w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        About Us
                    </h2>
                    <p className="font-normal max-w-2xl font-sans lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs text- pr-8">
                        At [Your Company Name], we are passionate about defending businesses, governments, and individuals against cyber threats.<br /> Our team of certified experts brings decades of experience in protecting sensitive data, detecting vulnerabilities, and mitigating risks — before they impact you.<br />
                        With a proactive approach and state-of-the-art technology, we empower organizations to operate confidently in the digital age.
                    </p>
                </div>
                <div  data-aos={isMobile ? 'fade-up' : 'fade-left'} className="right md:w-[50%] w-full h-auto flex lg:pl-10  justify-center items-center">
                    <Image
                        src='/images/about-image.jpg'
                        width={535}
                        height={340}
                        alt="image"
                        className=' rounded-3xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
