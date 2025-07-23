import React from 'react'

const ProcessPage = () => {
    return (
        <div className="about mb-0 sm:p-0 px-4 gap-8 sm:w-[90%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className='flex w-full'>
                <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                    Our Process
                </h2>
            </div>
            <div className="w-full p-2  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 sm:gap-50 xs:gap-36 gap-24">
                <div className='w-full rounded-[20px] flex justify-center items-center h-auto min-h-[270px] bg-white border border-accent drop-shadow-lg drop-shadow-accent/70'>
                    <div className='w-full h-full flex justify-evenly items-center gap-3'>
                        {/* 1 */}
                        <div className='w-auto h-auto flex flex-col gap-5 max-w-[150px]'>
                            <p className='step font-bold text-4xl'>01</p>
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-mono text-2xl font-bold text-[#BA23D2] w-fit'>Assess</h4>
                                <p className='font-sans text-base'>Understand your business, goals, and risks.</p>
                            </div>
                        </div>
                        <div className='w-[215px] relative h-auto rotate-90'>
                            <hr className='border border-accent/50 w-[215px] ' />
                            <div className='w-1 h-1 rounded-full bg-accent absolute -top-[1px]'></div>
                        </div>

                        {/* 2 */}
                        <div className='w-auto h-auto flex flex-col gap-5 max-w-[150px]'>
                            <p className='step font-bold text-4xl'>02</p>
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-mono text-2xl font-bold text-[#BA23D2] w-fit'>Plan</h4>
                                <p className='font-sans text-base'>Design a tailored security strategy.</p>
                            </div>
                        </div>
                        <div className='w-[215px] relative h-auto rotate-90'>
                            <hr className='border border-accent/50 w-[215px] ' />
                            <div className='w-1 h-1 rounded-full bg-accent absolute -top-[1px]'></div>
                        </div>

                        {/* 3 */}
                        <div className='w-auto h-auto flex flex-col gap-5 max-w-[150px]'>
                            <p className='step font-bold text-4xl'>03</p>
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-mono text-2xl font-bold text-[#BA23D2] w-fit'>Implement</h4>
                                <p className='font-sans text-base'>Deploy solutions and configure defenses..</p>
                            </div>
                        </div>
                        <div className='w-[215px] relative h-auto rotate-90'>
                            <hr className='border border-accent/50 w-[215px] ' />
                            <div className='w-1 h-1 rounded-full bg-accent absolute -top-[1px]'></div>
                        </div>
                        <div className='w-auto h-auto flex flex-col gap-5 max-w-[150px]'>
                            <p className='step font-bold text-4xl'>01</p>
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-mono text-2xl font-bold text-[#BA23D2] w-fit'>Assess</h4>
                                <p className='font-sans text-base'>Understand your business, goals, and risks.</p>
                            </div>
                        </div>
                        <div className='w-[215px] relative h-auto rotate-90'>
                            <hr className='border border-accent/50 w-[215px] ' />
                            <div className='w-1 h-1 rounded-full bg-accent absolute -top-[1px]'></div>
                        </div>
                        <div className='w-auto h-auto flex flex-col gap-5 max-w-[150px]'>
                            <p className='step font-bold text-4xl'>01</p>
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-mono text-2xl font-bold text-[#BA23D2] w-fit'>Assess</h4>
                                <p className='font-sans text-base'>Understand your business, goals, and risks.</p>
                            </div>
                        </div>
                        <div className='w-[215px] relative h-auto rotate-90'>
                            <hr className='border border-accent/50 w-[215px] ' />
                            <div className='w-1 h-1 rounded-full bg-accent absolute -top-[1px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessPage
