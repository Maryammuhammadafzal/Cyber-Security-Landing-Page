import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center py-10">
            <div className="w-full md:w-[95%] lg:w-[90%] h-auto flex justify-between items-start gap-4 md:flex-row flex-col">
                <div className="content flex w-full md:w-[50%] px-6 flex-col items-start justify-start">
                    <div className="heading flex flex-col text-2xl gap-3 max-w-lg leading-10">
                        <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-sans uppercase md:px-2 text-[#C5A100]'>
                            Contact Us
                        </h2>
                    </div>

                    <div className="flex flex-col text-secondary py-6 w-full h-auto gap-2 justify-center">
                        <p className="xs:text-lg text-base flex gap-3 font-normal">
                            <span className="font-bold text-secondary capitalize font-sans">Address: </span>
                            <span>Sindh Karachi , Pakistan</span>
                        </p>
                        <p className="xs:text-lg text-base flex gap-3 font-normal">
                            <span className="font-bold text-secondary capitalize font-sans">phone: </span>
                            <span>+92 3333333</span>
                        </p>
                        <p className="xs:text-lg text-base flex gap-3 font-normal">
                            <span className="font-bold text-secondary capitalize font-sans">Email: </span>
                            <span>info@[yourDomain]gmail.com</span>
                        </p>
                        <div className="xs:text-lg text-base flex-col flex gap-3 pt-4 font-normal">
                            <span className="font-bold text-secondary capitalize font-sans">Follow us: </span>
                            <div className="flex gap-3 flex-wrap h-auto text-[#C5A100]  p-3">
                                <FaFacebook size={24} />
                                <FaXTwitter size={24} />
                                <FaSquareInstagram size={24} />
                                <FaLinkedin size={24} />
                                <FaWhatsapp size={24} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="form flex flex-col items-center md:items-start justify-between gap-6 w-full md:w-[50%] px-6 h-full">
                    <div className="flex flex-col items-center md:items-start gap-6 h-auto w-full">
                        <div className="flex flex-row max-lg:flex-wrap justify-center md:justify-start gap-10">
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="text-secondary" htmlFor="name">Name</Label>
                                <div className="">
                                    <Input
                                        type="name"
                                        id="name"
                                        className="border-none w-full shadow-none bg-black/5 text-black rouunded-0"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="text-secondary" htmlFor="email">Email</Label>
                                <div className="">
                                    <Input
                                        type="email"
                                        id="email"
                                        className="border-none w-full shadow-none bg-black/5 text-black rouunded-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-lg:flex-wrap justify-center md:justify-start gap-10">
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="text-secondary" htmlFor="name">Phone Number</Label>
                                <div className="">
                                    <Input
                                        type="name"
                                        id="name"
                                        className="border-none w-full shadow-none bg-black/5 text-black rouunded-0"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="text-secondary" htmlFor="email">Course</Label>
                                <div className="">
                                    <Input
                                        type="email"
                                        id="email"
                                        className="border-none w-full shadow-none bg-black/5 text-black rouunded-0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid items-center w-full max-w-md sm:min-w-[550px] gap-3">
                            <Label className="text-secondary" htmlFor="message">Your message</Label>
                            <div className="">
                                <Textarea
                                    id="message"
                                    className="border-none w-full h-[100px] resize-none shadow-none bg-black/5 text-black rouunded-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto pt-2">
                        <button className="bg-secondary text-white px-8 py-2 uppercase rounded-lg font-semibold">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;