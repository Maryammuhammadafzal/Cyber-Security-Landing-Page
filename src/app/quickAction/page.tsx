import { Button } from '@/components/ui/button'
import React from 'react'

const QuickAction = () => {
    return (
        <div className="about mb-0 sm:p-0 px-4 gap-8 sm:w-[90%] md:w-[99%] lg:w-[85%] w-full mx-auto h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className='flex w-full'>
                <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                    Are you ready to protect what matters most?
                </h2>
            </div>
            <div className="w-full p-2 h-auto flex flex-col gap-3 justify-center items-center">
                <p className="font-normal max-w-2xl lg:text-xl sm:text-lg text-base text-[16px]">
                    We safeguard your business with cutting-edge cybersecurity solutions, ensuring your data, reputation, and operations remain secure in an ever-evolving threat landscape.
                </p>

                <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-accent bg-transparent font-semibold text-[16px] max-sm:text-sm border border-accent hover:bg-accent/5 hover:scale-x-90">
                    Get a Free Assessment
                </Button>
            </div>
        </div>
    )
}

export default QuickAction
