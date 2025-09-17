import Navbar from "@/components/auth/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl mx-auto p-4 border'>
        <h1 className='text-2xl'>Home Page</h1>
      </div>
    </>
  );
}
