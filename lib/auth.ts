import client from '@/lib/index'
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { AuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
export const authOptions:AuthOptions = {
    adapter: PrismaAdapter(client),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
            username: { label: 'email', type: 'text', placeholder: 'Enter Your Email' },
            password: { label: 'password', type: 'password', placeholder: 'Enter Your Password' },
        },
            async authorize(credentials:any) {
                //db logic
                if (!credentials) return null
                const user = await client.user.findUnique({
                    where:{
                        email: credentials.username
                    }
                })
                if (!user || !credentials.password) return null

                const isValid = await bcrypt.compare(credentials.password,user.password)
                if (!isValid) return null
                const {password, ...safeUser} = user
                return safeUser as any
            },
      })

    ],
    pages:{
        signIn: '/login'
    },
    callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token
    },
    async session({ session, token }) {
      if (token) session.user.id = token.id as number
      return session
    },
  },
   secret: process.env.NEXTAUTH_SECRET
}




