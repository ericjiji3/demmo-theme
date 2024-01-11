'use client';
import Image from 'next/image';
import Link from 'next/link';
import bg1 from 'public/home/home2/DEMMO01.jpg';
import bg2 from 'public/home/home2/DEMMO02.jpg';
import bg3 from 'public/home/home2/DEMMO03.jpg';
import bg4 from 'public/home/home2/DEMMO04.jpg';
import bg5 from 'public/home/home2/DEMMO05.jpg';
import bg6 from 'public/home/home2/DEMMO06.jpg';
import bg7 from 'public/home/home2/DEMMO07.jpg';
import bg8 from 'public/home/home2/DEMMO08.jpg';
import bg9 from 'public/home/home2/DEMMO09.jpg';
import { FC, useEffect, useState } from 'react';
import homeBG from '../public/home/DEMMMO02.png';

const HomeBar: FC = () => {
  const [base, setBase] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [navStyle, setNavStyle] = useState(
    'fixed z-[10] flex w-full items-center justify-between bg-black/0 p-4 lg:px-6'
  );
  const [down, setDown] = useState(false);
  let oldScrollY = 0;
  const handleScroll = () => {
    // setToggle(!toggle);

    console.log(window.scrollY);
    if (window.scrollY == 0) {
      setBase(true);
      setScrollDown(false);
      setScrollUp(false);
      setNavStyle(
        'fixed z-[10] flex w-full items-center justify-between opacity-1 bg-black/[.75] transition duration-200 ease-in p-4 lg:px-6 '
      );
    } else if (window.scrollY - oldScrollY < 0) {
      setBase(false);
      setScrollDown(true);
      setScrollUp(false);
      setNavStyle(
        'fixed z-[10] flex w-full items-center justify-between opacity-1 bg-black/[.75] transition duration-200 ease-in p-4 lg:px-6'
      );
    } else {
      setBase(false);
      setScrollDown(false);
      setScrollUp(true);
      setNavStyle(
        'fixed z-[10] flex w-full items-center justify-between opacity-0 transition duration-200 ease-in p-4 lg:px-6'
      );
    }
    oldScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-full">
      <div className={navStyle}>
        <div className="flex h-[44px] text-white">
          <Link
            href="/shop"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase mix-blend-difference lg:block">
              SHOP
            </div>
          </Link>
          <Link
            href="/contact"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase mix-blend-difference lg:block">
              CONTACT
            </div>
          </Link>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17.5" viewBox="0 0 15 17.5">
            <g
              id="Polygon_7"
              data-name="Polygon 7"
              transform="translate(15) rotate(90)"
              fill="none"
            >
              <path d="M8.75,0,17.5,15H0Z" stroke="none" />
              <path
                d="M 8.75 1.984635353088379 L 1.741037368774414 14 L 15.75896263122559 14 L 8.75 1.984635353088379 M 8.75 0 L 17.5 15 L 0 15 L 8.75 0 Z"
                stroke="none"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative h-full">
        <Image
          src={homeBG}
          width={1920}
          height={1277}
          alt="oops"
          className="block h-full w-full object-cover"
        />
        <Image
          src={bg1}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg2}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg3}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg4}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg5}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg6}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg7}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg8}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        <Image
          src={bg9}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
        />
        {/* <div className={toggle ? 'relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'hidden'}>
          <div className={toggle ? "absolute h-full w-screen bg-black/40 z-2" : "hidden"}></div>
          <Image src={bg1} width={1000} height={655} alt="oops" />
          <Image src={bg2} width={1000} height={655} alt="oops" />
          <Image src={bg3} width={1000} height={655} alt="oops" />
          <Image src={bg4} width={1000} height={655} alt="oops" />
          <Image src={bg5} width={1000} height={655} alt="oops" />
          <Image src={bg6} width={1000} height={655} alt="oops" />
          <Image src={bg7} width={1000} height={655} alt="oops" />
          <Image src={bg8} width={1000} height={655} alt="oops" />
          <Image src={bg9} width={1000} height={655} alt="oops" />
        </div> */}

        {/* <div className="hidden md:block">
          <Footer />
          </div> */}
      </div>
    </div>
  );
};

export default HomeBar;
