"use client";
import Image from "next/image";
import React from "react";
import HeadingBorder from "../../public/heading-border.png";
import { useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  return (
    <div className="w-full h-auto flex justify-center md:pt-20 pt-10  items-center">
      <div className="lg:w-[90%] w-full lg:px-0 px-3 h-auto flex flex-col items-center gap-5">
        <div className=" w-fit  h-auto flex flex-col gap-3 justify-center items-end">
          <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl lg:pr-14 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-24 lg:leading-18 sm:leading-14 leading-10  uppercase">
            Pricing Plans
          </h1>
          <Image
            src={HeadingBorder}
            alt="border"
            width={400}
            height={70}
            className="w-[50%]"
          />
        </div>

        <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-95 md:gap-75 gap-15 py-20  h-auto relative">
          <div className="1 w-[375px] h-[572px] bg-[#E6E6E6] max-sm:w-full rounded-4xl py-6 lg:px-6 md:px-3 px-6 flex flex-col relative items-center justify-between">
            <div className="w-full h-auto flex flex-col gap-6">
                <div className="w-full h-auto flex flex-col gap-3 py-10 ">
              <h3 className="uppercase font-extrabold lg:text-3xl text-2xl leading-6">Basic plan</h3>
              <h5 className="uppercase font-extrabold lg:text-xl text-lg leading-6">$0/month</h5>
            </div>

            <ul className="flex w-full h-auto flex-col gap-5">
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Access to online banking features.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Basic account management tools.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Standard customer support.
              </li>
            </ul>
            </div>

            <div className="w-full flex justify-center items-center py-3 px-3">
                <Button className='bg-[#C7D216] w-full text-base text-black'>Get The Plan</Button>
            </div>
          </div>
          <div className="2 lg:w-[407px] md:w-[320px] max-sm:w-full top-10 md:absolute drop-shadow-2xl drop-shadow-[#C7D216]/40 z-20 h-[630px] text-white bg-[#C7D216] rounded-4xl py-6 px-6 flex flex-col  items-center justify-between">
            <div className="w-full h-full flex flex-col gap-6 relative">
                <div className="absolute -top-10 left-10 max-sm:left-[10%] max-sm:w-[80%] bg-white lg:w-[270px] md:w-[220px] w-[300px] h-[40px] flex justify-center items-center rounded-xl text-lg uppercase text-black font-bold">Recommended</div>
                <div className="w-full h-auto flex flex-col gap-3 justify-center text-center items-center py-10 ">
              <h3 className="uppercase font-extrabold text-3xl leading-6">Business Plan</h3>
              <h5 className="uppercase font-extrabold text-xl leading-6">$25/month</h5>
            </div>

            <ul className="flex w-full h-auto flex-col gap-5">
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-white text-2xl" />{" "}
                Comprehensive business banking features.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-white text-2xl" />{" "}
               Dedicated account manager.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-white text-2xl" />{" "}
                Discounts on transaction fees and merchant services.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-white text-2xl" />{" "}
                Financial literacy resources.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-white text-2xl" />{" "}
                Unlimited online transactions.
              </li>
            </ul>
            </div>

            <div className="w-full flex justify-center items-center py-3 px-3">
                <Button className='bg-white text-black w-full text-base'>Get The Plan</Button>
            </div>
          </div>
          <div className="3 w-[375px] h-[572px] max-sm:w-full bg-[#E6E6E6] rounded-4xl py-6 lg:px-6 md:px-3 px-6 flex flex-col relative items-center justify-between">
            <div className="w-full h-auto flex flex-col gap-6">
                <div className="w-full h-auto flex flex-col gap-3 py-10 ">
              <h3 className="uppercase font-extrabold lg:text-3xl text-2xl leading-6">Premium Plan</h3>
              <h5 className="uppercase font-extrabold lg:text-xl text-lg leading-6">$10/month</h5>
            </div>

            <ul className="flex w-full h-auto flex-col gap-5">
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Advanced budgeting and financial tools.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Priority customer support.
              </li>
              <li className="flex gap-2 items-center text-sm">
                <IoIosCheckmarkCircle className="text-[#C7D216] text-2xl" />{" "}
                Free domestic wire transfers.
              </li>
            </ul>
            </div>

            <div className="w-full flex justify-center items-center py-3 px-3">
                <Button className='bg-[#C7D216] w-full text-base text-black'>Get The Plan</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;