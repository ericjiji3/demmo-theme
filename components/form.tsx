'use client';
import { useState } from 'react';
export type FormData = {
  email: string;
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
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: e.target.email.value })
      });
      if (response.status == 200) {
        setStatus('SENT');
        return response.json();
      }
    } catch (ex) {
      console.log(ex);
    }

    // if (response.status === 201) {
    // setData({
    //   email: "",
    //   message: "",
    // });
    // setStatus('SENT');
    // console.log(response);
    // }
    // return;
    // console.log('huh: ', response);
  };

  return (
    <div className="relative">
      <form className="container mx-auto mt-5" method="post" onSubmit={sendEmail}>
        <div className="">
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
  );
};

export default Form;
