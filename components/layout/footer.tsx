'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/demmo-logo-white.png';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  // const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="flex justify-between bg-black p-4">
      <Link href="/">
        <Image src={Logo} width={75} alt="oops" />
      </Link>
      <Link href="https://www.instagram.com/demmo.corp/">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="25px" height="25px">
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
      {/* <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div> */}
    </footer>
  );
}
