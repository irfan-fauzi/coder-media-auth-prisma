"use client";
import Link from "next/link";
import { signupCredential } from "@/lib/action";
import { useActionState } from "react";

const FormLogin = () => {
  const initialState = {
    values: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    error: {
      name: [],
      email: [],
      password: [],
      confirmPassword: [],
    },
    message: undefined,
  };
  const [state, formAction] = useActionState(signupCredential, initialState);
  

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

        {typeof state.error === "object" &&
          state.error !== null &&
          state.error.email?.map((error: string) => (
            <div key={error} aria-live='polite' aria-atomic='true'>
              <span className='text-sm text-red-500'>{error}</span>
            </div>
          ))}
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

        {typeof state.error === "object" &&
          state.error !== null &&
          state.error.password?.map((error: string) => (
            <div key={error} aria-live='polite' aria-atomic='true'>
              <span className='text-sm text-red-500'>{error}</span>
            </div>
          ))}
      </div>
      
      <button
        type='submit'
        className='w-full text-white bg-blue-400 font-medium rounded-lg px-5 py-2.5 cursor-pointer hover:bg-blue-500 focus:outline-none'
      >
        Login
      </button>
      <p>
        Already have an account?
        <Link href='/register' className='text-blue-400 hover:underline self-end'>
          <span className='font-semibold'>Register</span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
