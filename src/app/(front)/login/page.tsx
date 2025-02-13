import LoginButton from "@/components/LoginButton"
import { auth } from "@/auth"

const LogInPage = async () => {
  const session = await auth()
  const username = session?.user?.name
  return (
    <div className="p-8 grid gap-4 items-center ">
      <h1 className="text-xl">Login</h1>
      <p className="text-sm">GOOGLE_CLIENT_ID:{process.env.GOOGLE_CLIENT_ID}</p>
      <p className="text-sm">GOOGLE_CLIENT_SECRET:{process.env.GOOGLE_CLIENT_SECRET}</p>

      <LoginButton></LoginButton>
      <p>name:{username}</p>
    </div>
  )
}

export default LogInPage
