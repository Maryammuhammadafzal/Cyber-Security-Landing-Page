import React from 'react'

const ProcessPage = () => {
  return (
     <div className="about mb-0 sm:p-0 px-4 sm:w-[90%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
                <div className='flex w-full'>
                    <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                       Our Process
                    </h2>
                </div>
                <div className="w-full p-2  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 sm:gap-50 xs:gap-36 gap-24">
                   <div className='w-[85%] flex justify-center items-center h-auto min-h-[270px] bg-white border border-accent drop-shadow-md drop-shadow-accent'></div>
                </div>
            </div>
  )
}

export default ProcessPage
