import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 border-b'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <Link href={"/"}>
          <Image src='/next.svg' width={120} height={120} alt='logo' priority />
        </Link>
        <div className='flex items-center gap-3'>
          <ul className='hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-600 hover:text-gray-900'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/product'>Product</Link>
            </li>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link href='/user'>Users</Link>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col justify-center -space-y-1">
              <span className="font-semibold text-gray-600 text-right capitalize">username</span>
              <span className="font-xs text-gray-400 text-right capitalize">admin</span>
            </div>
            <button type="button" className="text-sm ring-2 bg-gray-100 rounded-full">
              <Image alt="avatar" width={64} height={64} className="w-8 h-8 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
