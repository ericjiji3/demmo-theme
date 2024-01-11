'use client';
import { useForm } from 'react-hook-form';

export type FormData = {
  email: string;
  message: string;
};

async function Form() {
  const { register, handleSubmit } = useForm<FormData>();

  async function send() {
    `use server`;
    console.log('hello');
  }

  return (
    <form className="container mx-auto" action={send}>
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
        <button
          type="submit"
          className="hover:shadow-form w-full bg-black px-8 py-3 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
