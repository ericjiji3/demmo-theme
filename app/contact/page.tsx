import type { Metadata } from 'next';
import Image from 'next/image';
import Bg from '../../public/DEMMO01.png';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds



export async function generateMetadata({
    params
  }: {
    params: { page: string };
  }): Promise<Metadata> {
    return {
      title: 'CONTACT US',
      description: 'Leave us a message and we will get back to you as soon as possible.',
    };
}

export default async function ContactPage() {

return (
    <>
    <Image src={Bg} width={500} height={500} alt="oops"/>
    <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form">
        <input type="hidden" name="form_type" value="contact" />
        <input type="hidden" name="utf8" value="✓" />
        <input type="text" name="email"/>
        <textarea name="message"></textarea>
        <input type="submit" value="Submit">
    </form>
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