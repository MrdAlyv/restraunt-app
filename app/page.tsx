import React from 'react'
import Image from 'next/image'
import saladImg from '@/assets/Illustration.png'
import userImg from '@/assets/User.png'
import Mask from "@/assets/Mask Group (3).png"
import Menu from '@/components/menu'
import chef1 from '@/assets/Group 10.png'
import chef2 from '@/assets/Group 8.png'
import chef3 from '@/assets/Group 9.png'
import customerImg from '@/assets/Ellipse 16.png'
const Home = () => {
  return (
    <>
      <div className='flex  items-center justify-center mb-28'>
        <div className='w-[600px]'>
          <p className='bg-color1 text-orange w-44 h-11 flex justify-center items-center rounded-3xl  mb-11'>Restauran</p>
          <h1 className='  text-7xl w-72  font-extrabold text-dark_brown'>Italian Cuisine</h1>
          <p className=' w-3/4 text-xl mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
          <button className='bg-orange mt-11 text-white flex items-center justify-center w-44 h-14 rounded-3xl'>Order now</button>
        </div>
        <div>
          <Image src={saladImg} alt='salad' width={550} height={550} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
        </div>
      </div>
      <div className='flex justify-center items-center bg-lightGreen h-[600px]  gap-64'>
        <div >
          <Image src={Mask} alt='mask' width={600} height={600} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
        </div>

        <div>
          <h1 className='text-7xl mb-11 font-semibold text-dark_brown'>Welcome to <p className='text-orange  font-semibold text-7xl'> delizioso</p></h1>
          <p className='w-96  leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo delectus nam corporis neque, deserunt cumque officia, ea suscipit, vitae vel aliquam ipsa praesentium aspernatur debitis exercitationem excepturi optio reiciendis aliquid?</p>
        </div>
      </div>
      <h1 className='text-center m-24 text-5xl font-semibold '>Our popular menu</h1>
      <Menu />
      <div>
        <h1 className='text-center  m-24 text-5xl font-semibold '>Our greatest chef</h1>
        <div className='flex flex-row justify-center items-center  gap-24 mt-11'>
          <div className='text-center'>
            <Image src={chef1} alt='chef1' width={300} height={500} className='w-full mb-11 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
            <p className='m-4 font-bold text-xl' >Betran Komar</p>
            <p>Head chef</p>
          </div>
          <div className='text-center'>
            <Image src={chef2} alt='chef2' width={300} height={500} className='w-full mb-11 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
            <p className='m-4 font-bold text-xl'>Ferry Sauwi</p>
            <p>Chef</p>
          </div>
          <div className='text-center'>
            <Image src={chef3} alt='chef3' width={300} height={500} className='w-full mb-11 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
            <p className='m-4 font-bold text-xl' >Iswan Dracho</p>
            <p>Chef</p>
          </div>
        </div>
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
    </>
  )
}

export default Home
