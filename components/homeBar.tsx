'use client';
import Image from 'next/image';
import Link from 'next/link';
import bg0 from 'public/home/DEMMMO02.png';
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
import 'react-h5-audio-player/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HomeBar: FC = () => {
  const [base, setBase] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [init, setInit] = useState(true);
  const [navStyle, setNavStyle] = useState(
    'fixed z-[10] flex w-full items-center justify-between bg-black/0 p-4 lg:px-6'
  );
  const [down, setDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [play, setPlay] = useState(false);
  const [audio, setAudio]: any = useState(null);
  let oldScrollY = 0;

  useEffect(() => {
    setAudio(new Audio('/sounds/demmo-audio.mp3'));
  }, []);
  const playAudio = () => {
    setPlay(true);
    setInit(false);
    audio.play();
    console.log('playing');
  };
  const pauseAudio = () => {
    setPlay(false);
    audio.pause();
    console.log('playing');
  };
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
            onClick={pauseAudio}
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase mix-blend-difference lg:block">
              SHOP
            </div>
          </Link>
          <Link
            href="/contact"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            onClick={pauseAudio}
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase mix-blend-difference lg:block">
              CONTACT
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="https://www.instagram.com/demmo.corp/"
            className="mr-4 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="25px"
                height="25px"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
          <div onClick={playAudio} className={play ? 'hidden' : 'block cursor-pointer'}>
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
          <div onClick={pauseAudio} className={play ? 'mr-1 block cursor-pointer' : 'hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14">
              <g id="Group_106" data-name="Group 106" transform="translate(-1802 -1040)">
                <line
                  id="Line_8"
                  data-name="Line 8"
                  y2="14"
                  transform="translate(1802.5 1040)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  y2="14"
                  transform="translate(1812.5 1040)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
          <div>
            <audio src="/sounds/demmo-audio.mp3" />
          </div>
        </div>
      </div>

      {/* <div className="absolute z-[10] h-screen">
        <Carousel>
                <div>
                    <Image
                        src={bg1}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg2}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg3}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg4}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg5}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg6}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
                <div>
                    <Image
                        src={bg7}
                        width={1920}
                        height={1277}
                        className="block h-full w-full object-cover"
                        alt="oops"
                    />
                </div>
            </Carousel>
      </div> */}
      <div className="relative h-full">
        <Image
          src={bg0}
          width={1920}
          height={1277}
          className="block h-full w-full object-cover"
          alt="oops"
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
