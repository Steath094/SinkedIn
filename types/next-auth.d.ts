// types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: number
      name: string
      email: string
    }
  }

  interface User {
    id: number
  }
}