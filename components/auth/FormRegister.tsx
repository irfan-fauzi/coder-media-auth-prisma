import Link from "next/link";

const FormRegister = () => {
  return (
    <form action='' className='space-y-6'>
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
        />
        <div aria-live='polite' aria-atomic='true'>
          <span className='text-sm text-red-500'>message</span>
        </div>
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
        />
        <div aria-live='polite' aria-atomic='true'>
          <span className='text-sm text-red-500'>message</span>
        </div>
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
        />
        <div aria-live='polite' aria-atomic='true'>
          <span className='text-sm text-red-500'>message</span>
        </div>
      </div>
      <div>
        <label
          htmlFor='passwordConfirm'
          className='block mb-2 text-sm font-medium text-gray-600'
        >
          Confirm Password
        </label>
        <input
          type='password'
          name='passwordConfirm'
          placeholder='********'
          className='bg-gray-50 border border-gray-300 text-gray-600 rounded-lg w-full p-2.5'
        />
        <div aria-live='polite' aria-atomic='true'>
          <span className='text-sm text-red-500'>message</span>
        </div>
      </div>
      <button
        type='submit'
        className='w-full text-white bg-blue-400 font-medium rounded-lg px-5 py-2.5 cursor-pointer hover:bg-blue-500 focus:outline-none'
      >
        Register
      </button>
      <p>Already have an account? 
        <Link href='/login' className='text-blue-400 hover:underline self-end'>
          <span className="font-semibold">Login</span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
