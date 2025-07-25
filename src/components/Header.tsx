"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Toggle } from "./ui/toggle";
import { AlignCenter, X } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Vector from "./Vector";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    });
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const closeMenuHandler = (event: MouseEvent) => {
            const target = event.target as Node | null;
            if (menuRef.current && target && !menuRef.current.contains(target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", closeMenuHandler);

        return () => {
            document.removeEventListener("click", closeMenuHandler);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        }
        window.addEventListener('scroll' , handleScroll);
        return () => window.removeEventListener('scroll' , handleScroll);
    })

    return (
        <header className="w-full h-[120px] flex justify-center px-5 relative items-center">
            <div className='w-[365px] h-[365px] blur-[200px] -left-50 -top-50  -z-10 absolute '>
                <Vector />
            </div>
            <div className={` ${offset > 10 ? 'bg-white' : 'bg-transparent'} z-50 w-full h-[120px] flex justify-center fixed top-0 left-0 items-center`}>
                <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex justify-between items-center relative">
                    <Link href="/" className="">
                        <Image
                            src='/images/logo.png'
                            title="Digital Horizon"
                            width={93}
                            height={48}
                            alt="Digital Horizon"
                        />
                    </Link>
                    <nav className="w-auto h-auto px-2">
                        <ul className="w-auto md:flex hidden h-auto  justify-center items-center gap-6">
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Home <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/about'} className="md:text-lg relative text-base group flex justify-center items-center">About <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/services'} className="md:text-lg relative text-base group flex justify-center items-center">Services <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/process'} className="md:text-lg relative text-base group flex justify-center items-center">Process <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/pricing'} className="md:text-lg relative text-base group flex justify-center items-center">Pricing Plans <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                            <li className="flex justify-center items-center p-1 w-fit">
                                <Link href={'/contact'} className="md:text-lg relative text-base group flex justify-center items-center">Contact Us <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>

                            </li>
                        </ul>
                        <Toggle
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden flex text-2xl cursor-pointer"
                        >
                            <AlignCenter size={64} className="w-[100px] " />
                        </Toggle>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen ? (
                        <div
                            data-aos="fade-left"
                            className="mobile-menu absolute -right-2 z-50 -top-3 p-3 w-[280px] h-screen bg-white shadow-lg"
                        >
                            <Toggle
                                data-aos="fade-right"
                                onClick={() => setIsMenuOpen(false)}
                                className="md:hidden flex text-2xl cursor-pointer"
                            >
                                <X size={64} className="w-[100px] " />
                            </Toggle>

                            <nav className="w-auto h-auto px-2">
                                <ul className="w-auto h-auto flex flex-col justify-center items-center gap-4">
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/'} className="text-xl">Home</Link>
                                    </li>
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/about'} className="text-xl">About</Link>
                                    </li>
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/services'} className="text-xl">Services</Link>
                                    </li>
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/process'} className="text-xl">Process</Link>
                                    </li>
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/pricing'} className="text-xl">Pricing Plans</Link>
                                    </li>
                                    <li className="flex justify-center items-center p-1">
                                        <Link href={'/contact'} className="text-xl">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    );
};

export default Header;
