import Navbar from "@/components/auth/Navbar";
import { fetchUsers } from "@/lib/fetch";
const UserPage = async () => {
  const users = await fetchUsers();
  return (
    <>
      <Navbar />
      {users.error ? (
        <div className='text-red-500 text-center mt-4'>{users.error}</div>
      ) : (
        <section className='max-w-screen-xl mx-auto p-5'>
          <div className='overflow-x-auto rounded-lg shadow-lg'>
            <table className='min-w-full divide-y divide-gray-200 bg-white'>
              <thead className='bg-blue-600 text-white'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
                  >
                    No.
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
                  >
                    Nama
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {users.data?.map((user, index) => (
                  <tr key={user.id}>
                    <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                      {index + 1}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                      {user.name}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                      {user.email}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                      {user.role}
                    </td>
                  </tr>
                ))}
              
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default UserPage;
