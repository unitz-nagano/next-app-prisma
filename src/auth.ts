import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  // secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // async redirect({}) {
    //   return "/"
    // },
    // authorized({ auth, request: { nextUrl } }) {
    //   console.log(auth, nextUrl)
    //   const isLoggedIn = !!auth
    //   const isOnProtected = nextUrl.pathname.startsWith("/protected")
    //   const isOnLogin = nextUrl.pathname.startsWith("/login")
    //   // ログイン済みでログインページにアクセスしている場合
    //   if (isLoggedIn && isOnLogin) {
    //     const callBackUrl = nextUrl.searchParams.get("callbackUrl")
    //     if (callBackUrl) {
    //       // コールバックURLが指定されていたらリダイレクト
    //       return Response.redirect(callBackUrl)
    //     } else {
    //       return true
    //     }
    //   }
    //   // ログインしていなくても見れるページの場合
    //   if (!isOnProtected) return true
    //   // ログイン済みの場合
    //   if (isLoggedIn) return true
    //   return false
    // },
    //   async session({ token, session }) {
    //     if (token.sub && session.user) {
    //       session.user.id = token.sub
    //     }
    //     return session
    //   },
    //   async jwt({ token, user, account }) {
    //     if (user && account) {
    //       // サインイン時のみ実行
    //       token.idToken = account.id_token || null
    //       token.accessToken = account.access_token || null
    //       return {
    //         ...token,
    //         accessToken: account.access_token,
    //         refreshToken: account.refresh_token || null,
    //         idToken: account.id_token || null,
    //       }
    //     }
    //     return token
    //   },

    async session({ session, user }) {
      console.log("session", session)
      console.log("user", user)
      return session
    },
    async jwt({ token, user }) {
      console.log("token", token)
      console.log("user", user)
      return token
    },
  },
  ...authConfig,
})
