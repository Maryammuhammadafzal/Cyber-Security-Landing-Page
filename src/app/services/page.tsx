import React from 'react'

const ServicePage = () => {
    return (
        <div className="about mb-0 w-full h-auto flex justify-center  items-center py-30">
            <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex flex-col justify-center items-center md:gap-3 gap-6">
                <div className="left md:w-[50%] w-full h-auto space-y-5">
                    <h2 className="font-semibold w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        Our Services
                    </h2>

                </div>
                <div className='w-full h-auto flex flex-col gap-5 justify-center items-center'>
                    <div className='grid grid-cols-3 gap-5 w-full h-auto'>
                        <div className='w-full col-span-2 h-[366px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage
