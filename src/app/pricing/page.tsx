"use client";
import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
    return (
        <div className="w-full h-auto flex justify-center  items-center">
            <div className="about mb-0 sm:p-0 px-4 gap-8 sm:w-[90%] md:w-[99%] lg:w-[85%] w-full mx-auto flex-col h-auto flex justify-center  items-center  md:py-20 sm:py-14 xs:py-9 py-5">
                <div className=" w-full  h-auto">
                    <h2 className="font-semibold max-w-lg w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                        Pricing Plans
                    </h2>
                </div>

                <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-100 md:gap-75 gap-15 py-20  h-auto relative">
                    <div className="1 w-[375px] h-[572px] max-sm:w-full rounded-[20px] bg-white  border border-accent/50 flex flex-col relative items-center justify-between">
                        <div className="w-full h-auto flex flex-col gap-6 justify-center items-center">
                            <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-tr-[20px] rounded-tl-[20px]  sm:text-lg text-base text-white font-mono font-bold">Starting at: $499/month</div>
                            <div className="w-full h-auto flex flex-col gap-3 py-10  px-2 justify-center items-center ">
                                <h4 className='font-mono lg:text-2xl text-xl font-bold text-center w-fit'>Essential Protection</h4>
                                <p className='font-sans lg:text-base max-w-xs text-sm'>For small businesses and startups who need to secure their basic operations..</p>
                            </div>

                            <ul className="flex w-fit h-auto flex-col gap-5 mx-auto ">
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                   24/7 Monitoring & Threat Alerts
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Basic Vulnerability Scanning
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Monthly Security Reports
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Employee Awareness Toolkit
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-br-[20px] rounded-bl-[20px]  text-lg text-white font-mono font-bold">👉 Get Started</div>
                    </div>
                    <div className="2 lg:w-[407px] md:w-[320px] w-[375px]  max-sm:w-full top-10 md:absolute bg-white  border border-accent/50 drop-shadow-xl drop-shadow-accent z-20 h-[630px] rounded-[20px] flex flex-col  items-center justify-between">
                        <div className="w-full h-full flex flex-col gap-6 ">
                            <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-tr-[20px] rounded-tl-[20px]  sm:text-lg text-base text-white font-mono font-bold">Custom Pricing Contact for Quote</div>
                            <div className="w-full h-auto flex flex-col gap-3 px-2 justify-center text-center items-center py-10 ">
                                 <h4 className='font-mono lg:text-2xl text-xl font-bold text-center w-fit'>Enterprise Shield</h4>
                                <p className='font-sans lg:text-base max-w-xs text-sm'>For large organizations requiring full-scale, fully managed security operations.</p>
                            </div>

                            <ul className="flex w-fit mx-auto h-auto flex-col list-disc gap-5">
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Everything in Advanced, plus:
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Dedicated Security Consultant
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Fully Managed SIEM & SOC
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Customized Risk Management <br /> Strategy
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Priority Incident Response & <br />  Forensics
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-br-[20px] rounded-bl-[20px]  text-lg text-white font-mono font-bold">👉 Request a Consultation</div>
                    </div>
                    <div className="3 w-[375px] h-[572px] max-sm:w-full rounded-4xl  border border-accent/50 bg-white  flex flex-col relative items-center justify-between">
                        <div className="w-full h-auto flex flex-col gap-6">
                            <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-tr-[20px] rounded-tl-[20px]  sm:text-lg text-base text-white font-mono font-bold">Starting at: $1,499/month</div>
                            <div className="w-full h-auto flex flex-col gap-3 px-2 justify-center items-center text-center py-10 ">
                                 <h4 className='font-mono lg:text-2xl text-xl font-bold text-center w-fit'>Advanced Defense</h4>
                                <p className='font-sans lg:text-base max-w-xs text-sm'>For growing businesses looking to strengthen their defenses and meet compliance needs.</p>
                            </div>

                            <ul className="flex w-fit h-auto flex-col mx-auto gap-5">
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Everything in Essential, plus:
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Advanced Penetration Testing
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Incident Response Readiness
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Cloud Security Assessment
                                </li>
                                <li className="sm:text-base xs:text-sm text-xs list-disc">
                                    Quarterly Compliance Review
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-l from-[#EF99FF] to-[#B911D4] w-full h-[50px] flex justify-center items-center rounded-br-[20px] rounded-bl-[20px]  text-lg text-white font-mono font-bold">👉 Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;