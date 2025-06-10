import { getServerSession } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect('/feed')
  }
  return (
   <main className="flex flex-col">
    <section className="flex w-full h-screen justify-center items-center gap-4">
      <div className="absolute top-10 left-50 "><Image src={'/logo.jpg'} alt="logo" width={60} height={60}></Image><p className="text-5xl"></p></div>
      <div className="p-24 w-2/5 gap-6 flex flex-col">
        <h1 className="text-5xl text-[#526a6e] leading-16 text-center md:text-start">With you every step of your Failure</h1>
        <div className="flex flex-col gap-6">
          <button className="border-2 py-2 px-4 w-full rounded-full hover:bg-gray-100 cursor-pointer" >
            <Link href={'/login'}>Sign in With email</Link>
          </button>
          <p className="text-[12px] font-light">By clicking Continue to join or sign in, you agree to SinkedIn's <span className="text-blue-600 font-medium hover:underline cursor-pointer">User Agreement</span>,<span className="text-blue-600 font-medium hover:underline cursor-pointer"> Privacy Policy</span>, and <span className="text-blue-600 font-medium hover:underline cursor-pointer">Cookie Policy.</span></p>
          <p className="text-center">New to SinkedIn? <span className="text-blue-600 font-medium hover:underline cursor-pointer"><Link href={'/signup'}>Join now</Link></span></p>
        </div>
      </div>
      <div>
        <Image
          src={'/home.svg'}
          alt="Home logo"
          width={700}
          height={700}
        />
      </div>
   </section>
   </main>
  );
}
