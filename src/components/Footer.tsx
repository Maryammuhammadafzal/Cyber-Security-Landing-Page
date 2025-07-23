

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    let contact_data = [
        {
            name: "Address:",
            link: "3891 Ranchview Dr. Richardson, California 62639",
        },
        {
            name: "Send Email:",
            link: "Info@gmail.com",
        },
        {
            name: "Call Emergency:",
            link: "+88 (308) 555-0121",
        },
    ];
    return (
        <div className="w-full bg-secondary  h-auto gap-5 flex justify-center items-center py-10 px-3">
            <div className=" w-[80%] max-lg:w-[95%] max-md:w-full  h-auto flex flex-col gap-10 justify-center items-center">
                <div className="footerContent max-sm:justify-center w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between mb-3 gap-6 ">
                    <div className="left w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
                        {/* Logo */}
                        <div className="logo ">
                            <Image src='/images/logo.png' alt="image" width={200} height={200} />
                            <div className="flex gap-3 flex-wrap h-auto  p-3">
                            <FaFacebook size={24} />
                            <FaXTwitter size={24} />
                            <FaSquareInstagram size={24} />
                            <FaLinkedin size={24} />
                            <FaWhatsapp size={24} />

                        </div>
                        </div>
                        
                    </div>

                    <div className="max-sm:w-full max-sm:py-3 w-full p-3 h-auto ">
                        <h4 className='font-mono lg:text-2xl text-xl font-bold text-[#BA23D2] w-fit'>Quick Links</h4>
                        <ul className="list-none text-base py-2  gap-2 flex flex-col ">
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Home
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    About Us
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Campus Life
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    How To Apply
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Testimonial
                                </a>
                            </li>

                            <li className="  font-normal">
                                <a href="#" className="">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="middle  max-sm:py-3 w-full p-3 h-auto">
                        <h4 className=" text-xl capitalize font-semibold">
                            Our Programs
                        </h4>
                        <ul className="list-none py-2 gap-2 flex flex-col ">
                            <li className="text-sm  font-normal ">
                                Undergraduate Programs
                            </li>
                            <li className="text-sm  font-normal">
                                Graduate Programs
                            </li>
                            <li className="text-sm  font-normal">
                                Online Education
                            </li>
                        </ul>
                    </div>
                    <div className="left max-sm:w-full max-sm:px-3 gap-10  max-sm:py-3 w-full p-3  h-auto max-[900px]:w-full">
                        <h4 className=" text-lg capitalize font-semibold ">
                            Contact Information
                        </h4>
                        <ul className="list-none py-2 gap-2 flex flex-col ">
                            <li className="text-sm  font-normal ">
                                [University Address]
                            </li>
                            <li className="text-sm  font-normal">
                                [University Phone Number]
                            </li>
                            <li className="text-sm  font-normal">
                                admissions@[youruniversity].edu
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright flex gap-4 justify-center items-center w-full h-auto py-5">
                    <p className="md:text-sm text-xs text-center">© 2021 all copyright reserved. All Rights Reserved. <Link href='/' className="underline"> Rootlet Solution</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Footer;