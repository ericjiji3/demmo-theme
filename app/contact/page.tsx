import Form from 'components/form';

import Image from 'next/image';
import Bg from 'public/DEMMO01.jpg';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  return (
    <div className="relative">
      <Image src={Bg} width={2048} height={1362} alt="oops" className="w-full h-[87vh] object-cover object-[10%] polg:h-full" />
      <div className="w-full absolute top-[5%] left-[50%] text-center px-5 translate-x-[-50%] md:transform-none md:w-[50%] md:pr-6">
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
