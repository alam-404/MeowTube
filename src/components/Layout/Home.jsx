import React from 'react'
// components
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <main className=''>
      <div>
        <Header />
      </div>
      <div className='relative left-[14rem] top-[4rem] w-[calc(100%-14rem)]'>
        <Outlet />
      </div>
    </main>
  )
}
