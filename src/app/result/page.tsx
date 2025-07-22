import Image from 'next/image'
import React from 'react'

const ResultPage = () => {
    return (
        <div className="about mb-0 sm:w-[90%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className='flex w-full'>
                <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                    We Have Impactful Results
                </h2>
            </div>
            <div className="w-full p-2  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
                <div className="left max-w-[420px] max-h-[400px] relative md:w-[50%] flex justify-center items-center w-full h-auto mx-auto order-2">

                   <hr className='border w-full border-accent/50' />
                   <hr className='border w-[97%] rotate-90 border-accent/50' />
                   <div className='w-1 h-1 bg-accent rounded-full absolute '></div>
                </div>
                <div className=" md:w-[50%] w-full h-auto flex justify-start items-start order-1">
                    <Image
                        src='/images/result-image.png'
                        width={500}
                        height={500}
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}

export default ResultPage
