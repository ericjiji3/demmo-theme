'use client';
import { useState } from 'react';
export type FormData = {
  email: string;
  message: string;
};

const Newsletter = () => {
  const [data, setData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('SUBMIT');

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: e.target.email.value })
      });
      if (response.status == 200) {
        console.log(response);
        if (response.statusText != 'OK') {
          setStatus(response.statusText);
        } else {
          setStatus('SENT');
        }

        return response.json();
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="relative">
      <div className="">
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

export default Newsletter;
