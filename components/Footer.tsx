import { Settings, ShieldQuestion } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    const list = ['About','Careers' ,'Advertising', 'Small Business', 'Talent Solutions','Marketing Solutions', 'Sales Solutions', 'Safery Center', 'Community Guidelines', 'Privacy & Terms', 'Mobile App']
  return (
    <div className='flex px-28 py-12 gap-16 bg-[#F7F9FB] w-full'>
        <div className='flex flex-col justify-center gap-3'>
                    <Image src={'/logo.jpg'} alt="Logo" width={60} height={60}></Image>
                    <h1 className='font-medium text-xl'>Sinked<span className='text-[#0275B1]'>In</span></h1>
        </div>
        <div className='flex flex-col gap-4 w-2/3'>
            <div>
                <h2 className='font-medium text-[16px]'>Navigation</h2>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {list.map((opt,i)=>(
                    <p key={i} className='w-max cursor-pointer hover:underline '>{opt}</p>
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className='font-medium text-[16px]'>Fast access</h2>
            </div>
            <div className='flex flex-col gap-2'>
                <button className="inline-flex  justify-between px-8 py-2 font-sans font-semibold tracking-wide text-white bg-[#0275B1] rounded-lg w-60 cursor-pointer">
                <p>QUESTIONS?</p>    <ShieldQuestion/>
                </button>
                <button className="inline-flex  justify-between px-8 py-2 font-sans font-semibold tracking-wide border-2 border-[#0275B1] text-[#0275B1] rounded-lg w-60 cursor-pointer">
                <p>SETTINGS</p>    <Settings/>
                </button>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className='font-medium text-[16px]'>Language</h2>
            </div>
            <select name="lang" id="lang" className='w-72 shadow py-2 px-4 bg-white'>
                <option value="eng">English</option>
            </select>
        </div>
    </div>
  )
}
