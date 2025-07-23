'use client'
import Vector from '@/components/Vector'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
const [isMobile , setIsMobile] = useState(false);
 useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    });
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
        <div className="about mb-0 w-full h-auto flex justify-center relative items-center  xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
           <div className='w-[365px] h-[365px] blur-[200px] -right-60 -bottom-40  -z-10 absolute '>
                        <Vector/>
                    </div>
            <div className="w-full p-3 sm:p-0 sm:w-[95%] lg:w-[85%]  h-auto flex flex-col justify-center items-center gap-10">
                <div className="left flex justify-center items-center text-center w-full h-auto space-y-5">
                    <h2 className="font-semibold w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        Our Services
                    </h2>

                </div>
                <div className='w-full h-auto flex flex-col gap-3 justify-center items-center'>
                    <div data-aos={isMobile ? 'fade-up' : 'fade-right'} className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 w-full h-auto'>
                        <div className='w-full md:col-span-2 col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl lg:pt-8 pt-6 lg:px-6 px-4 flex flex-col gap-2'>
                                <Image
                                    src='/images/service-icon1.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-3xl text-2xl'>
                                    Managed Security Services
                                </h3>
                                <p className='lg:text-lg sm:text-base text-sm max-w-lg'>
                                    Round-the-clock monitoring, threat detection, and response — keeping your business safe 24/7.
                                </p>
                            </div>
                        </div>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl lg:pt-8 pt-6 lg:px-6 px-4 flex flex-col gap-2'>
                                <Image
                                    src='/images/service-icon2.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-3xl text-3xl'>
                                  Network Security
                                </h3>
                                <p className='lg:text-lg text-base max-w-lg'>
                                 Secure your networks from internal and external threats, ensuring uninterrupted operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 w-full h-auto'>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl lg:pt-8 pt-6 lg:px-6 px-4 flex flex-col gap-2'>
                                <Image
                                    src='/images/service-icon3.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-3xl text-3xl'>
                                    Cloud Security
                                </h3>
                                <p className='lg:text-lg text-base max-w-lg'>
                                    Protect your cloud environments from misconfigurations, malware, and unauthorized access.
                                </p>
                            </div>
                        </div>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl lg:pt-8 pt-6 lg:px-6 px-4 flex flex-col gap-2'>
                                <Image
                                    src='/images/service-icon4.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-3xl text-3xl'>
                                  Data Protection
                                </h3>
                                <p className='lg:text-lg text-base max-w-lg'>
                                Ensure compliance with GDPR, HIPAA, and other regulations while securing sensitive data.
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:col-span-1 xs:col-span-2 col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl lg:pt-8 pt-6 lg:px-6 px-4 flex flex-col gap-2'>
                                <Image
                                    src='/images/service-icon5.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-3xl text-3xl'>
                                  Compliance
                                </h3>
                                <p className='lg:text-lg text-base max-w-lg'>
                                Assess risks and meet industry-specific standards with expert guidance and audits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage
