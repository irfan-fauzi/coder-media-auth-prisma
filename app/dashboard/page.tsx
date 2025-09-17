import { auth } from "@/auth";
import Navbar from "@/components/auth/Navbar";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='text-2xl'>Dashboard Page</h1>
        <h2 className='text-xl'>
          Welcome back : <span className='font-bold'>{session?.user?.name}</span>
        </h2>
       
      </div>
    </>
  );
};

export default DashboardPage;
