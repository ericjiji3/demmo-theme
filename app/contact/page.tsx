import Form from 'components/form';

import Image from 'next/image';
import Bg from 'public/DEMMO01.jpg';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  return (
    <div className='relative'>
      <Image src={Bg} width={2048} height={1362} alt="oops" className="w-full"/>
      <div className='absolute top-[50%] left-[50%]'>
      <Form />
      </div>
      
      {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
    </p> */}
    </div>
  );
}
