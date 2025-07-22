import Vector from '@/components/Vector'
import Image from 'next/image'
import React from 'react'

const ServicePage = () => {
    return (
        <div className="about mb-0 w-full h-auto flex justify-center relative items-center py-30">
           <div className='w-[365px] h-[365px] blur-[200px] -right-60 -bottom-40  -z-10 absolute '>
                        <Vector/>
                    </div>
            <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex flex-col justify-center items-center gap-10">
                <div className="left flex justify-center items-center text-center w-full h-auto space-y-5">
                    <h2 className="font-semibold w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        Our Services
                    </h2>

                </div>
                <div className='w-full h-auto flex flex-col gap-5 justify-center items-center'>
                    <div className='grid grid-cols-3 gap-5 w-full h-auto'>
                        <div className='w-full col-span-2 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl pt-10 px-8 flex flex-col gap-4'>
                                <Image
                                    src='/images/service-icon1.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-4xl text-3xl'>
                                    Managed Security Services
                                </h3>
                                <p className='text-lg max-w-lg'>
                                    Round-the-clock monitoring, threat detection, and response — keeping your business safe 24/7.
                                </p>
                            </div>
                        </div>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl pt-10 px-8 flex flex-col gap-4'>
                                <Image
                                    src='/images/service-icon2.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-4xl text-3xl'>
                                  Network Security
                                </h3>
                                <p className='text-lg max-w-lg'>
                                 Secure your networks from internal and external threats, ensuring uninterrupted operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 w-full h-auto'>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl pt-10 px-8 flex flex-col gap-4'>
                                <Image
                                    src='/images/service-icon3.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-4xl text-3xl'>
                                    Cloud Security
                                </h3>
                                <p className='text-lg max-w-lg'>
                                    Protect your cloud environments from misconfigurations, malware, and unauthorized access.
                                </p>
                            </div>
                        </div>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl pt-10 px-8 flex flex-col gap-4'>
                                <Image
                                    src='/images/service-icon4.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-4xl text-3xl'>
                                  Data Protection
                                </h3>
                                <p className='text-lg max-w-lg'>
                                Ensure compliance with GDPR, HIPAA, and other regulations while securing sensitive data.
                                </p>
                            </div>
                        </div>
                        <div className='w-full col-span-1 h-[366px]'>
                            <div className='w-full h-full border border-accent rounded-3xl pt-10 px-8 flex flex-col gap-4'>
                                <Image
                                    src='/images/service-icon5.png'
                                    width={80}
                                    height={80}
                                    alt="image"
                                    className=' rounded-3xl'
                                />
                                <h3 className='font-mono font-bold lg:text-[40px] sm:text-4xl text-3xl'>
                                  Compliance
                                </h3>
                                <p className='text-lg max-w-lg'>
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
