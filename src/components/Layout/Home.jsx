import React from 'react'
// components
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <main className=''>
      <section>
        <Header />
      </section>
      <section className='p-5 relative left-[13rem] top-[4rem] w-[calc(100%-14rem)] scroll-smooth'>
        <Outlet />
      </section>
    </main>
  )
}
