"use client"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Register() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
     const res = await axios.post('/api/register',{
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value
    })
    console.log(res);
    router.push('/login')
  }

  return (
    <form onSubmit={handleLogin} className="p-4 space-y-4">
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  )
}
