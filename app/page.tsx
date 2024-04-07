import React from 'react'
import Image from 'next/image'
import saladImg from '@/assets/Illustration.png'
import Mask from "@/assets/Mask Group (3).png"
import Menu from '@/components/menu'
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
          <Image src={saladImg} alt='salad' width={550} height={550} />
        </div>
      </div>
      <div className='flex justify-center items-center bg-lightGreen h-[600px]  gap-64'>
        <div >
          <Image src={Mask} alt='mask' width={600} height={600} />
        </div>

        <div>
          <h1 className='text-7xl mb-11 font-semibold text-dark_brown'>Welcome to <p className='text-orange  font-semibold text-7xl'> delizioso</p></h1>
          <p className='w-96  leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo delectus nam corporis neque, deserunt cumque officia, ea suscipit, vitae vel aliquam ipsa praesentium aspernatur debitis exercitationem excepturi optio reiciendis aliquid?</p>
        </div>
      </div>
      <Menu/>
    </>
  )
}

export default Home
