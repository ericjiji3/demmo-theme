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
  }
  
  return (
    <div className="relative ml-5">
      <div className={toggle ? "absolute flex flex-col-reverse flex-col flex-wrap gap-3 bottom-[37px] p-2 left-0 w-full bg-black text-white border border-white border-b-0" : "hidden"}>
        <div
        className={clsx(
          'prose text-white',
          className
        )}
        dangerouslySetInnerHTML={{ __html: html as string }}
      />
      </div>
      
      <dt className={toggle ? "flex items-center text-sm uppercase tracking-wide text-white px-12 py-2 border border-white border-t-0" : "flex items-center text-sm uppercase tracking-wide text-white px-12 py-2 border border-white"} onClick={showSizes}>
        <div>
          DESCRIPTION 
        </div>
        
        <div className={toggle ? "ml-2 rotate-180" : "ml-2"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10">
            <path id="Polygon_1" data-name="Polygon 1" d="M6.5,0,13,10H0Z" transform="translate(13 10) rotate(180)" fill="#fff"/>
          </svg>
        </div>
      </dt>
    </div>
    
  );
};

export default Prose;
