'use client';
import clsx from 'clsx';
import type { FunctionComponent } from 'react';
import { useState } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  const [toggle, setToggle] = useState(false);

  const showSizes = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative ml-5">
      <div
        className={
          toggle
            ? 'absolute bottom-[37px] left-0 flex w-full flex-col flex-col-reverse flex-wrap gap-3 border border-b-0 border-white bg-black p-2 text-white'
            : 'hidden'
        }
      >
        <div
          className={clsx('prose text-white', className)}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </div>

      <dt
        className={
          toggle
            ? 'flex items-center border border-t-0 border-white px-6 py-2 text-sm uppercase tracking-wide text-white'
            : 'flex items-center border border-white px-6 py-2 text-sm uppercase tracking-wide text-white md:px-12'
        }
        onClick={showSizes}
      >
        <div>DESCRIPTION</div>

        <div className={toggle ? 'ml-2 rotate-180' : 'ml-2'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10">
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M6.5,0,13,10H0Z"
              transform="translate(13 10) rotate(180)"
              fill="#fff"
            />
          </svg>
        </div>
      </dt>
    </div>
  );
};

export default Prose;
