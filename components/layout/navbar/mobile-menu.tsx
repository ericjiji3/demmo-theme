'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-black/80 text-white backdrop-blur-xl">
              <div className="h-full p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>
                {menu.length ? (
                  <ul className="flex h-full w-full flex-col">
                    <li className="py-2 text-xl text-black transition-colors hover:text-neutral-500">
                      <Link href="/" onClick={closeMobileMenu}>
                        HOME
                      </Link>
                    </li>
                    <li className="py-2 text-xl text-black transition-colors hover:text-neutral-500">
                      <Link href="/shop" onClick={closeMobileMenu}>
                        SHOP
                      </Link>
                    </li>
                    <li className="py-2 text-xl text-black transition-colors hover:text-neutral-500">
                      <Link href="/contact" onClick={closeMobileMenu}>
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                ) : null}
                <ul className="flex h-full w-full flex-col justify-center">
                  <li className="py-5 text-center text-xl text-white transition-colors hover:text-neutral-500">
                    <Link href="/" onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li>
                  <li className="py-5 text-center text-xl text-white transition-colors hover:text-neutral-500">
                    <Link href="/shop" onClick={closeMobileMenu}>
                      SHOP
                    </Link>
                  </li>
                  <li className="py-5 text-center text-xl text-white transition-colors hover:text-neutral-500">
                    <Link href="/contact" onClick={closeMobileMenu}>
                      CONTACT
                    </Link>
                  </li>
                  <li className="py-5 text-center text-xl text-white transition-colors hover:text-neutral-500">
                    <Link href="https://www.instagram.com/demmo.corp/" className="text-center">
                      <div className="text-center">
                        <svg
                          className="mx-auto"
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
                  </li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
