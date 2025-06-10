import { ArrowUpRight, Bell, Briefcase, Ellipsis, HomeIcon, MessageSquare, Network, Search, User2, Users } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
    const session = await getServerSession();
    const userName = session?.user.name;
  return (
    <nav className='py-4 px-12 flex  gap-20'>
        <div className=''>
            <Image src={'/logo.jpg'} alt="Logo" width={45} height={45}></Image>
        </div>
        <div className='flex gap-12'>
            <div className='flex justify-center items-center text-center'><Link href={'/feed'} className='flex justify-center items-center flex-col'><HomeIcon/>Home</Link></div>
            <div className='flex justify-center items-center text-center'><Link href={'/feed'} className='flex justify-center items-center flex-col'><Users/>Network</Link></div>
            <div className='flex justify-center items-center text-center'><Link href={'/feed'} className='flex justify-center items-center flex-col'><Briefcase/>Jobs</Link></div>
            <div className='flex justify-center items-center text-center'><Link href={'/feed'} className='flex justify-center items-center flex-col'><MessageSquare/>Chat</Link></div>
            <div className='flex justify-center items-center text-center'><Link href={'/feed'} className='flex justify-center items-center flex-col'><Bell/>Notices</Link></div>
        </div>
        <div className='flex relative w-1/4'>
            <input type="text" placeholder='Search...' className='w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 '/>
            <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                <Search color='blue'/>
            </div>
        </div>
        <div className='flex gap-4 '>
            <div className='w-12 h-12 p-2 rounded-full border flex justify-center items-center'>
                {/* <Image src={}></Image> */}
                <User2 width='100%' height='100%'/>
            </div>
            <div className='flex flex-col'>
                <h1>{session ? userName: <>username</>}</h1>
                <p className='flex'>367 views today +32 <ArrowUpRight/></p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Ellipsis/>
            Other
        </div>
    </nav>
  )
}
