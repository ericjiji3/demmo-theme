'use client';
import React, { useState } from 'react';
export type FormData = {
  email: string;
  message: string;
};

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/password`, {
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post'
    });

    if (request.status !== 200) return setPasswordIncorrect(true), setLoading(false);
    else window.location.reload();
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mr-1 p-2 text-black"
          placeholder="PASSWORD"
        />
        <button type="submit">
          <svg
            className="h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="54"
            viewBox="0 0 34 54"
            fill="none"
          >
            <path d="M0.999999 52L31 27L0.999999 2" stroke="white" stroke-width="3" />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default Password;
