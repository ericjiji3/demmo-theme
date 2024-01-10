'use client';
import Footer from 'components/layout/footer';
import Image from 'next/image';
import bg1 from 'public/home/home2/DEMMO01.jpg';
import bg2 from 'public/home/home2/DEMMO02.jpg';
import bg3 from 'public/home/home2/DEMMO03.jpg';
import bg4 from 'public/home/home2/DEMMO04.jpg';
import bg5 from 'public/home/home2/DEMMO05.jpg';
import bg6 from 'public/home/home2/DEMMO06.jpg';
import bg7 from 'public/home/home2/DEMMO07.jpg';
import bg8 from 'public/home/home2/DEMMO08.jpg';
import bg9 from 'public/home/home2/DEMMO09.jpg';
import { FC, useState } from 'react';
import homeBG from '../public/home/DEMMMO02.png';

const HomeBar: FC = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHome = () => {
    setToggle(!toggle);
 
  };

  return (
    <div className={toggle ? 'relative h-full' : 'absolute top-0 z-[-1] h-[100dvh] w-full'}>
      
      <div className="relative h-full">
        <Image
          src={homeBG}
          width={1920}
          height={1277}
          alt="oops"
          className={toggle ? 'hidden' : 'block h-full w-full object-cover'}
        />

        <div className={toggle ? 'relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'hidden'}>
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
        </div>
        <div className={toggle ? 'fixed bottom-0 w-full md:relative z-[3]' : 'absolute bottom-0 w-full z-[3]'}>
          <div className="flex w-full items-center justify-between bg-transparent md:bg-black p-4">
            <div onClick={toggleHome}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={toggle ? 'hidden' : 'block'}
              >
                <g id="Group_1" data-name="Group 1" transform="translate(-1547 -755)">
                  <g
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    transform="translate(1547 755)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <rect width="11" height="11" stroke="none" />
                    <rect x="0.5" y="0.5" width="10" height="10" fill="none" />
                  </g>
                  <g
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    transform="translate(1560 755)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <rect width="11" height="11" stroke="none" />
                    <rect x="0.5" y="0.5" width="10" height="10" fill="none" />
                  </g>
                  <g
                    id="Rectangle_4"
                    data-name="Rectangle 4"
                    transform="translate(1547 768)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <rect width="11" height="11" stroke="none" />
                    <rect x="0.5" y="0.5" width="10" height="10" fill="none" />
                  </g>
                  <g
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    transform="translate(1560 768)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <rect width="11" height="11" stroke="none" />
                    <rect x="0.5" y="0.5" width="10" height="10" fill="none" />
                  </g>
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={toggle ? 'block' : 'hidden'}
              >
                <g
                  id="Rectangle_6"
                  data-name="Rectangle 6"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <rect width="24" height="24" stroke="none" />
                  <rect x="1" y="1" width="22" height="22" fill="none" />
                </g>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
                <g
                  id="Polygon_7"
                  data-name="Polygon 7"
                  transform="translate(13) rotate(90)"
                  fill="none"
                >
                  <path d="M7,0l7,13H0Z" stroke="none" />
                  <path
                    d="M 7 2.109258651733398 L 1.674216270446777 12 L 12.32578372955322 12 L 7 2.109258651733398 M 7 0 L 14 13 L 0 13 L 7 0 Z"
                    stroke="none"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="hidden md:block">
          <Footer />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
