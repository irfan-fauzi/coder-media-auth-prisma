import FormLogin from "@/components/auth/FormLogin"

const Login = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-500">Login page</h1>
      <FormLogin />
    </div>
  )
}

export default Login