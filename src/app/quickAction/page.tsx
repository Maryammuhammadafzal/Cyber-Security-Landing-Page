import { Button } from '@/components/ui/button'
import React from 'react'

const QuickAction = () => {
    return (
        <div className=" sm:p-0 px-3 gap-4 sm:w-[90%] md:w-[95%] lg:w-[90%] xl:w-[85%] w-full mx-auto h-auto flex xs:flex-row flex-col justify-center items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className='flex xl:w-[80%] lg:w-[75%] md:w-[65%] xs:w-[60%] w-full'>
                <h2 className="font-semibold  w-fit gradient-title xl:text-7xl lg:text-6xl md:text-5xl xs:text-4xl text-3xl xl:leading-16 lg:leading-14 ">
                    Are you ready to protect what matters most?
                </h2>
            </div>
            <div className="xl:w-[22%] lg:w-[25%] md:w-[35%] xs:w-[40%] w-full h-auto flex flex-col gap-3 justify-center ">
                <p className="font-normal lg:text-xl md:text-lg text-base">
                    Get in touch today for a free consultation or security assessment.
                </p>

                <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-accent bg-transparent font-semibold text-[16px] max-sm:text-sm border border-accent hover:bg-accent/5 hover:scale-x-90">
                    Get a Free Assessment
                </Button>
            </div>
        </div>
    )
}

export default QuickAction
