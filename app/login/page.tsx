"use client"
import { signIn } from "next-auth/react"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {

   const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: false,
      username: emailRef.current?.value,
      password: passwordRef.current?.value
    })

    if (res?.ok) router.push("/")
    else alert("Invalid credentials")
  }

  return (
     <section className="w-full h-screen flex justify-center items-center flex-col">
      <div className="absolute top-10 left-50 "><Image src={'/logo.jpg'} alt="logo" width={60} height={60}></Image><p className="text-5xl"></p></div>
      <div className="w-1/4 shadow-lg rounded-md p-4">
        <form onSubmit={handleLogin} className="p-4 flex flex-col">
          <label htmlFor="email" className="text-[14px] font-semibold  mt-4 mb-1">Enter Your Email</label>
          <input type="email" ref={emailRef} className="px-4 py-2  border border-gray-500 rounded-md" />
          <label htmlFor="email" className="text-[14px] font-semibold  mt-4 mb-1">Enter Your Password</label>
          <input type="password" ref={passwordRef} className="px-4 py-2  border border-gray-500 rounded-md" />

          <p className="text-[12px] font-light text-center mt-6">By clicking Continue to join or sign in, you agree to SinkedIn's <span className="text-blue-600 font-medium hover:underline cursor-pointer">User Agreement</span>,<span className="text-blue-600 font-medium hover:underline cursor-pointer"> Privacy Policy</span>, and <span className="text-blue-600 font-medium hover:underline cursor-pointer">Cookie Policy.</span></p>
          <button type="submit" className="mt-6 border-2 py-3 px-4 w-full rounded-full text-white bg-[#0a66c2] hover:bg-[#004182] cursor-pointer">Sign in</button>
        </form>
      </div>
      <p className="text-center p-6">New to SinkedIn? <span className="text-blue-600 font-medium hover:underline cursor-pointer"><Link href={'/signup'}>Join now </Link></span></p>
    </section>
  )
}
