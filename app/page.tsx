import React from 'react'
import Image from 'next/image'
import userImg from '@/assets/User.png'
import Menu from '@/components/menu'
import chef1 from '@/assets/Group 10.png'
import chef2 from '@/assets/Group 8.png'
import chef3 from '@/assets/Group 9.png'
import customerImg from '@/assets/Ellipse 16.png'
import ItalianCuise from '@/components/iCuise'
import WelcomeSide from '@/components/welcomeSide'
import Chefs from '@/components/chefs'
const Home = () => {
  return (
    <div>
      <ItalianCuise />
      <div className='flex justify-center items-center bg-lightGreen h-[600px]  gap-64'>
        <WelcomeSide />
      </div>
      <h1 className='text-center m-24 text-5xl font-semibold '>Our popular menu</h1>
      <Menu />
      <div>
        <Chefs />
        <div>
          <h1 className='text-center mt-11 text-5xl font-semibold '>Our customers say</h1>
          <div className='flex justify-center items-center mt-11 flex-col'>
            <Image src={customerImg} alt='customers' width={200} height={200} />
            <p className=' text-lg font-semibold mt-7 mb-2'>Starla Virgoun</p>
            <p>Financial advisor</p>
          </div>
          <div className='flex flex-row justify-center items-center' >
            <Image src={userImg} alt='users' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
