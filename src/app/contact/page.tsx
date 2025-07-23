import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center md:py-20 sm:py-14 xs:py-7 py-4">
            <div className="w-full md:w-[95%] lg:w-[90%] h-auto flex justify-between items-start gap-4 md:flex-row flex-col">
                <div className="content flex w-full md:w-[50%] px-6 flex-col items-start justify-start">
                    <div className="heading flex flex-col text-2xl max-w-lg">
                        <h2 className="font-semibold capitalize font-mono max-w-sm w-fit gradient-title xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
                            We’re Here to Help
                        </h2>
                    </div>

                    <p className="font-normal pt-3 max-w-lg lg:text-xl md:text-lg text-base">
                        Ready to get started? Fill out our [contact form] and our team will reach out shortly to schedule your free security consultation.
                    </p>
                </div>

                <div className="form flex flex-col items-center md:items-start justify-between gap-6 w-full md:w-[50%] px-6 h-full">
                    <div className="flex flex-col items-center md:items-start gap-6 h-auto w-full">
                        <div className="flex flex-row max-lg:flex-wrap justify-center md:justify-start gap-10">
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="" htmlFor="name">Name:</Label>
                                <div className="">
                                    <Input
                                        type="name"
                                        id="name"
                                        className="border-none w-full shadow-none bg-black/5 text-black hover:border border-accent/50 rounded-none"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="" htmlFor="email">Email:</Label>
                                <div className="">
                                    <Input
                                        type="email"
                                        id="email"
                                        className="border-none w-full shadow-none bg-black/5 text-black hover:border border-accent/50 rounded-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-lg:flex-wrap justify-center md:justify-start gap-10">
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="" htmlFor="name">Phone Number:</Label>
                                <div className="">
                                    <Input
                                        type="name"
                                        id="name"
                                        className="border-none w-full shadow-none bg-black/5 text-black hover:border border-accent/50 rounded-none"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full max-w-md min-w-[250px] items-center gap-3 ">
                                <Label className="" htmlFor="email">Service:</Label>
                                <div className="">
                                    <Input
                                        type="email"
                                        id="email"
                                        className="border-none w-full shadow-none bg-black/5 text-black hover:border border-accent/50 rounded-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid items-center w-full max-w-md sm:min-w-[550px] gap-3">
                            <Label className="" htmlFor="message">Message:</Label>
                            <div className="">
                                <Textarea
                                    id="message"
                                    className="border-none w-full h-[100px] resize-none shadow-none bg-black/5 text-black hover:border border-accent/50 rounded-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto pt-2">
                        <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-accent bg-transparent font-semibold text-[16px] max-sm:text-sm border border-accent hover:bg-accent/5 hover:scale-x-90">
                            Get a Free Assessment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;