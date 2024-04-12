import React from 'react'
import Menu from '@/components/menu'
export default function MenuPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center m-32 text-5xl font-bold'>Menu</h1>
      <Menu/>
    </div>
  )
}
