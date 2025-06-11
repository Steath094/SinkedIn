import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function layout({children}:{ children:React.ReactNode}) {
  return (
    <main>
      <Navbar/>
      <div className='min-h-[50vh]'>
        {children}
      </div>
      <Footer/>
    </main>
  )
}
