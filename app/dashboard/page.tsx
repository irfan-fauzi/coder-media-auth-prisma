import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className='max-w-screen-xl mx-auto p-4 border'>
      <h1 className='text-2xl'>Home Page</h1>
      <h2 className="text-xl">
        Welcome back <span className="font-bold">{session?.user?.name}</span>
      </h2>
    </div>
  );
};

export default DashboardPage;
