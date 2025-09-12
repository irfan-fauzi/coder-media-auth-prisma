"use client";
import Link from "next/link";
import { signupCredential } from "@/lib/action";
import { useActionState } from "react";
import Button from "./Button";

const FormRegister = () => {
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
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-gray-600'
        >
          Name
        </label>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          className='bg-gray-50 border border-gray-300 text-gray-600 rounded-lg w-full p-2.5'
          defaultValue={state?.values?.name as string | undefined}
        />
        {typeof state.error === "object" &&
          state.error !== null &&
          state.error.name?.map((error: string) => (
            <div key={error} aria-live='polite' aria-atomic='true'>
              <span className='text-sm text-red-500'>{error}</span>
            </div>
          ))}
      </div>
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
          placeholder='johndow@yahoo.com'
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
      <div>
        <label
          htmlFor='confirmPassword'
          className='block mb-2 text-sm font-medium text-gray-600'
        >
          Confirm Password
        </label>
        <input
          type='password'
          name='confirmPassword'
          placeholder='********'
          className='bg-gray-50 border border-gray-300 text-gray-600 rounded-lg w-full p-2.5'
          defaultValue={state?.values?.confirmPassword as string | undefined}
        />
        {typeof state.error === "object" &&
          state.error !== null &&
          state.error.confirmPassword?.map((error: string) => (
            <div key={error} aria-live='polite' aria-atomic='true'>
              <span className='text-sm text-red-500'>{error}</span>
            </div>
          ))}
      </div>
      <Button title="Register" />
      <p>
        Already have an account?
        <Link href='/login' className='text-blue-400 hover:underline self-end'>
          <span className='font-semibold'>Login</span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
