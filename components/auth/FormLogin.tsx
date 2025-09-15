"use client";
import Link from "next/link";
import { loginCredential } from "@/lib/action";
import { useActionState } from "react";
import Button from "./Button";

const FormLogin = () => {
  const initialState = {
    values: {
      email: "",
      password: "",
    },
    error: {
      email: [],
      password: [],
    },
    message: undefined,
  };
  const [state, formAction] = useActionState(loginCredential, initialState);
 
  return (
    <form action={formAction} className='space-y-6'>
      <div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-600'
        >
          Email
        </label>
        <input
          type='email'
          name='email'
          placeholder='youremail@gmail.com'
          className='bg-gray-50 border border-gray-300 text-gray-600 rounded-lg w-full p-2.5'
          defaultValue={state?.values?.email as string | undefined}
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-600'
        >
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='********'
          className='bg-gray-50 border border-gray-300 text-gray-600 rounded-lg w-full p-2.5'
          defaultValue={state?.values?.password as string | undefined}
        />
        <div aria-live='polite' aria-atomic='true'>
          <span className='text-sm text-red-500'>{state?.message}</span>
        </div>
      </div>

      <Button title='Login' />
      <p>
        Already have an account?
        <Link
          href='/register'
          className='text-blue-400 hover:underline self-end'
        >
          <span className='font-semibold'>Register</span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
