import Image from 'next/image'
import React from 'react'

const TestimonialPage = () => {
    const testimonial_data = [
        {
            title: 'CTO, Financial Firm',
            description: '"They detected vulnerabilities we didn’t even know existed. We feel much safer now."',
        },
        {
            title: 'CEO, E-commerce Platform',
            description: '"Their team handled our breach response quickly and professionally — saved us from major loss."',
        },
        {
            title: 'IT Manager, Healthcare ',
            description: '"We trust them completely with our cloud infrastructure security."',
        },
        {
            title: 'IT Manager, Healthcare ',
            description: '"We trust them completely with our cloud infrastructure security."',
        },
    ]
    return (
        <div className="about mb-0 sm:p-0 px-4 gap-8 sm:w-[90%] md:w-[99%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center xl:py-30 lg:py-24 md:py-18 sm:py-12 xs:py-7 py-5">
            <div className='flex w-full'>
                <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                    Testimonials
                </h2>
            </div>
            <div className="w-full p-2 h-auto grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:gap-5 xs:gap-3 gap-8 justify-center items-center">
                {testimonial_data.map((testimonial, index) => (
                    <div  data-aos={'fade-up'} key={index} className={`${index > 2 ? 'md:hidden' : 'block'} flex justify-center px-5 relative rounded-[20px] border border-accent/70 text-center w-full h-auto min-h-[235px] items-center flex-col gap-3`}>
                        <div className='w-[70px] h-[70px] absolute -top-8 left-4 flex justify-center items-center'>
                            <Image src='/images/quote.png' alt='quote-icon' width={70} height={70} />
                        </div>
                        <div className='h-10 w-10 rounded-full bg-accent-foreground/10'></div>
                        <h4 className='font-mono lg:text-2xl text-xl font-bold'>{testimonial.title}</h4>
                        <p className='font-sans lg:text-base text-sm'>{testimonial.description}</p>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default TestimonialPage
