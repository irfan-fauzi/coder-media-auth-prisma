import FormRegister from "@/components/auth/FormRegister"


const RegisterPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-500">Create acoount</h1>
      <FormRegister />
    </div>
  )
}

export default RegisterPage