'use client'
import { Button } from '@/components/ui/button'
import Vector from '@/components/Vector'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const HeroPage = () => {
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
        <div className="home mb-0 w-full h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-6">
                <div data-aos={isMobile ? 'fade-up' : 'fade-right'} className="left md:w-[50%] w-full h-auto space-y-5 max-w-lg">
                    <h1 className="font-semibold 2xl:text-[72px] gradient-title 2xl:leading-20 xl:text-7xl lg:text-6xl md:text-6xl min-[768px]:text-5xl text-5xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        Securing Your
                        Digital World
                    </h1>
                    <p className="font-normal max-w-2xl lg:text-xl sm:text-lg text-base text-[16px]">
                        We safeguard your business with cutting-edge cybersecurity solutions, ensuring your data, reputation, and operations remain secure in an ever-evolving threat landscape.
                    </p>

                    <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-accent bg-transparent font-semibold text-[16px] max-sm:text-sm border border-accent hover:bg-accent/5 hover:scale-x-90">
                        Get a Free Assessment
                    </Button>
                </div>
                <div data-aos={isMobile ? 'fade-up' : 'fade-left'} className="right md:w-[50%] w-full h-auto flex md:py-0 py-10 relative justify-center items-center">
                    <div className='w-[200px] h-[200px] blur-[100px]  -z-10 absolute '>
                        <Vector />
                    </div>
                    <Image
                        src='/images/hero-image.png'
                        width={480}
                        height={350}
                        title="Digital Agency"
                        alt="Digital Agency"
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroPage
