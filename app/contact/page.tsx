import Image from 'next/image';
import Bg from 'public/DEMMO01.jpg';
import { Resend } from 'resend';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  async function send() {
    'use server';

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: 'andreas@demmocorp.com',
      to: 'info@demmocorp.com',
      subject: 'testing',
      html: '<p>hai</p>'
    });
    console.log(data);
  }

  return (
    <div className="relative">
      <Image
        src={Bg}
        width={2048}
        height={1362}
        alt="oops"
        className="polg:h-full h-[87vh] w-full object-cover object-[10%] md:h-auto md:object-[0%]"
      />
      <div className="absolute left-[50%] top-[5%] w-full translate-x-[-50%] px-5 text-center md:w-[50%] md:transform-none md:pr-6">
        <form className="container mx-auto" action={send}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
            />
          </div>
          <div className="mb-3">
            <textarea
              rows={10}
              placeholder="MESSAGE US..."
              className="h-full w-full resize-none border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full bg-black px-8 py-3 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
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
