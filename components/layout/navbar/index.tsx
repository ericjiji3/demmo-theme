import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/demmo-logo-white.png';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex h-full items-center justify-between bg-black p-4 text-white lg:px-6">
      <div className="relative flex w-full items-center justify-between md:hidden">
        <MobileMenu menu={menu} />
        <Link href="/" className="absolute left-[50%] translate-x-[-50%]">
          <div>
            <Image src={Logo} width={100} alt="oops" />
          </div>
        </Link>
        <div className="relative">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
      <div className="hidden w-full items-center md:flex">
        <div className="flex w-full md:w-1/2">
          {/* <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link> */}
          <Link
            href="https://www.instagram.com/demmo.corp/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
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
                  fill-rule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>

          <Link
            href="/shop"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase lg:block">SHOP</div>
          </Link>
          <Link
            href="/contact"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-sm font-medium uppercase lg:block">CONTACT</div>
          </Link>

          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Link href="/">
            <div>
              <Image src={Logo} width={100} alt="oops" />
            </div>
          </Link>
        </div>

        <div className="flex justify-end md:w-1/2">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
