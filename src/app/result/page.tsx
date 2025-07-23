import Image from 'next/image'
import React from 'react'

const ResultPage = () => {
    return (
        <div className="about mb-0 sm:p-0 px-4 sm:w-[90%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center ">
            <div className='flex w-full'>
                <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                    We Have Impactful Results
                </h2>
            </div>
            <div className="w-full p-2  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 sm:gap-50 xs:gap-36 gap-24">
                <div  data-aos={ 'fade-left'} className="left sm:max-w-[500px] xs:max-w-[380px] max-w-[280px] sm:max-h-[400px] xs:max-h-[320px] max-h-[250px] relative md:w-[50%] w-full h-auto mx-auto order-2">

                    <hr className='border w-full border-accent/50' />
                    <hr className='border w-[98%] rotate-90 border-accent/50' />
                    <div className='w-1 h-1 bg-accent rounded-full absolute right-0 -top-[2px]'></div>
                    <div className='w-1 h-1 bg-accent rounded-full absolute right-[50.6%] -top-61 max-[1200px]:-top-51 max-[950px]:-top-41 max-[950px]:right-[50.3%] max-md:-top-61 max-md:right-[50.6%] max-sm:-top-46 max-xs:-top-34 max-[320px]:-top-30'></div>

                    <div className='w-full h-[200px] absolute bottom-0 justify-center items-end flex gap-10 '>
                        <div className='w-auto  h-auto max-h-[150px] mr-6 mb-8 flex flex-col gap-2 text-center'>
                            <h4 className='lg:text-4xl md:text-3xl xs:text-2xl text-xl font-bold font-mono'>99.99%</h4>
                            <p className='md:text-base sm:text-sm text-xs'> incident mitigation rate</p>
                        </div>
                        <div className='w-auto  h-auto max-h-[150px] mr-6 mb-8 flex flex-col gap-2 text-center'>
                            <h4 className='lg:text-4xl md:text-3xl xs:text-2xl text-xl font-bold font-mono'> 24/7/365</h4>
                            <p className='md:text-base sm:text-sm text-xs'>security monitoring</p>
                        </div>
                    </div>
                    <div className='w-full h-[200px] absolute top-0 justify-center items-start flex gap-10 '>
                        <div className='w-auto  h-auto max-h-[150px] mr-6 mt-8 flex flex-col gap-2 text-center'>
                            <h4 className='lg:text-4xl md:text-3xl xs:text-2xl text-xl font-bold font-mono'>15+ years</h4>
                            <p className='md:text-base sm:text-sm text-xs'> of industry experience</p>
                        </div>
                        <div className='w-auto  h-auto max-h-[150px] lg:mr-6 mr-3 mt-8 flex flex-col gap-2 text-center'>
                            <h4 className='lg:text-4xl md:text-3xl xs:text-2xl text-xl font-bold font-mono'>100+ cities</h4>
                            <p className='md:text-base sm:text-sm text-xs'>Clients In different cities</p>
                        </div>
                    </div>
                </div>
                <div className=" md:w-[50%] w-full h-auto flex justify-start items-start order-1">
                    <Image
                        src='/images/result-image.png'
                        width={500}
                        height={500}
                        alt="image"
                        className='animate-pulse'
                    />
                </div>
            </div>
        </div>
    )
}

export default ResultPage
