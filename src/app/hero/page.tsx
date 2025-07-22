import { Button } from '@/components/ui/button'
import Vector from '@/components/Vector'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className="home mb-0 w-full h-auto flex justify-center  items-center py-30">
            <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
                <div className="left md:w-[50%] w-full h-auto space-y-5">
                    <h1 className="font-semibold 2xl:text-7xl gradient-title 2xl:leading-20 xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
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
                <div className="right md:w-[50%] w-full h-auto flex  relative justify-center items-center">
                    <div className='w-[200px] h-[200px] blur-[100px]  -z-10 absolute '>
                        <Vector/>
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
