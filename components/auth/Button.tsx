"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type='submit'
      className={
        pending
          ? "bg-gray-400 w-full text-white font-medium rounded-lg px-5 py-2.5 cursor-not-allowed focus:outline-none"
          : `w-full text-white bg-blue-400 font-medium rounded-lg px-5 py-2.5 cursor-pointer hover:bg-blue-500 focus:outline-none`
      }
    >
      {pending ? "Processing..." : title}
    </button>
  );
};

export default Button;
