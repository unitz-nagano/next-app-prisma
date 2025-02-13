// "use client"
import { signIn } from "@/auth"

// async function login() {
//   "use server"
//   // Credentialプロバイダを使ってログイン
//   await signIn("google")
// }

export default function LoginButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      {/* <form> */}
      <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
        Signin with Google
      </button>
    </form>
  )
}
