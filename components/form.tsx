'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  email: string;
  message: string;
};

const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(event : any) {
    console.log(event);
    const response = await fetch('/api/email', {
      method: 'POST',
      body: event,
    })
  }

  return (
    <form className="container mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
          {...register('email', { required: true })}
        />
      </div>
      <div className="mb-3">
        <textarea
          rows={10}
          placeholder="MESSAGE US..."
          className="h-full w-full resize-none border border-black bg-white p-3 text-base font-medium text-gray-700 outline-none focus:shadow-md"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button type='submit' className="hover:shadow-form w-full bg-black px-8 py-3 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
