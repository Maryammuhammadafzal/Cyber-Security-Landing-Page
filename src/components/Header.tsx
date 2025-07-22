"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Toggle } from "./ui/toggle";
import { AlignCenter, X } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Vector from "./Vector";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (
        <header className="w-full h-auto flex justify-center relative items-center">
             <div className='w-[365px] h-[365px] blur-[200px] -left-50 -top-50  -z-10 absolute '>
                        <Vector/>
                    </div>
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
                    <ul className="w-auto h-auto flex justify-center items-center gap-6">
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Home <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">About <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Services <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Process <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Pricing Plans <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                        <li className="flex justify-center items-center p-1 w-fit">
                            <Link href={'/'} className="md:text-lg relative text-base group flex justify-center items-center">Contact Us <div className="w-6 h-6 bg-accent group-hover:block hidden blur-xl absolute"></div></Link>
                            
                        </li>
                    </ul>
                    <Toggle
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden flex text-2xl cursor-pointer"
                    >
                        <AlignCenter size={64} className="w-[100px] " />
                    </Toggle>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen ? (
                    <div
                        data-aos="fade-left"
                        ref={menuRef}
                        className="mobile-menu absolute -right-2 top-0 p-3 w-[280px] h-screen bg-white shadow-lg"
                    >
                        <Toggle
                            data-aos="fade-right"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden flex text-2xl cursor-pointer"
                        >
                            <X size={64} className="w-[100px] " />
                        </Toggle>

                        <nav className="w-auto h-auto px-2">
                            <ul className="w-auto h-auto flex justify-center items-center gap-4">
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">Home</Link>
                                </li>
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">About</Link>
                                </li>
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">Services</Link>
                                </li>
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">Process</Link>
                                </li>
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">Pricing Plans</Link>
                                </li>
                                <li className="flex justify-center items-center p-1">
                                    <Link href={'/'} className="text-xl">Contact Us</Link>
                                </li>
                            </ul>
                            <Toggle
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className="md:hidden flex text-2xl cursor-pointer"
                            >
                                <AlignCenter size={64} className="w-[100px] " />
                            </Toggle>
                        </nav>
                    </div>
                ) : null}
            </div>
        </header>
    );
};

export default Header;