'use client';
import Image from 'next/image';
import Bg from 'public/DEMMO01.jpg';
import { useState } from 'react';
export type FormData = {
  email: string;
  message: string;
};

const Form = () => {
  const [data, setData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('SUBMIT');

  const sendEmail = async (e: any) => {
    // setData({
    //   email: e.target.email.value,
    //   message: e.target.message.value
    // })
    // console.log(data);
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: e.target.email.value, message: e.target.message.value })
    });

    if (response.status === 200) {
      // setData({
      //   email: "",
      //   message: "",
      // });
      // setStatus('SENT');
      // console.log(response);
    }
    // console.log('huh: ', response);
  };

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
        <form className="container mx-auto" method="post" onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-full border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows={10}
              placeholder="MESSAGE US..."
              className="h-full w-full resize-none border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full bg-black px-8 py-3 text-base font-semibold text-white outline-none"
            >
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
