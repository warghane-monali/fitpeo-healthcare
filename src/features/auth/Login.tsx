import { useNavigate } from "react-router"

const Login = () => {

  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen place-content-center place-items-center">
      <h1 className="text-2xl font-bold mb-3">Welcome to Filpe Healthcare</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={()=>navigate('/dashboard')}>Go to dashboard</button>
      </div>
  )
}

export default Login