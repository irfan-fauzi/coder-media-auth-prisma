import { signOut } from "@/auth";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server"; // dalam komponen ini kita menggunakan fitur server action makanya perlu tulis ini
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type='submit'
        className='px-5 py-2 bg-blue-500 text-white rounded h-full cursor-pointer hover:bg-blue-600 transition'
      >
        Sign out
      </button>
    </form>
  );
};

export default SignOutButton;
