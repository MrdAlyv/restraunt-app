import React from 'react'
import Image from 'next/image'
import DeliziosoSalad from '@/assets/Mask Group (3).png'

const WelcomeSide = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center bg-lightGreen h-[600px] py-12 lg:py-0'>
        <div className='lg:w-1/2 flex justify-center lg:justify-end'>
            <div className='w-full lg:w-[500px] lg:mr-12'>
            <Image src={DeliziosoSalad} alt='mask' width={600} height={600} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
          </div>
        </div>
        <div className='lg:w-1/2'>
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl mb-4 lg:mb-11 font-semibold text-dark_brown'>Welcome to <span className='text-orange font-semibold'>delizioso</span></h1>
            <p className='w-full lg:w-96 leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo delectus nam corporis neque, deserunt cumque officia, ea suscipit, vitae vel aliquam ipsa praesentium aspernatur debitis exercitationem excepturi optio reiciendis aliquid?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeSide
