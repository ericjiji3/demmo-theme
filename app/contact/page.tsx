import Form from 'components/form';

import Image from 'next/image';
import Bg from '../../public/DEMMO01.png';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  return (
    <>
      <Image src={Bg} width={500} height={500} alt="oops" />
      <Form />
      {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
    </p> */}
    </>
  );
}
