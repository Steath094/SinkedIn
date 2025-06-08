"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
   <SessionProvider>
    <Child/>
    <button onClick={()=>signOut()}>LogOut</button>
   </SessionProvider>
  );
}
export function Child(){
  const session = useSession()
  const router = useRouter()
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
           {session.status=='authenticated' &&  JSON.stringify(session)}
            <button className="border-2 p-3" onClick={()=>router.push('/register')}>Create An account</button>
            <button className="border-2 p-3" onClick={()=>router.push('/login')}>Login</button>
        </div>
  );
}
