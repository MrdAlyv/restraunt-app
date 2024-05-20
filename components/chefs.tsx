import React from 'react'
import Image from 'next/image'
import chef1 from '@/assets/Group 8.png'
import chef2 from '@/assets/Group 10.png'
import chef3 from '@/assets/Group 9.png'

const Chefs = () => {
  return (
    <div className="text-center">
      <h1 className='m-12 text-5xl font-semibold '>Our greatest chefs</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-24'>
        <div>
          <Image src={chef1} alt='chef1' width={300} height={500} className='w-full mb-8 lg:mb-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
          <div className="mb-4">
            <p className='font-bold text-xl'>Betran Komar</p>
            <p className="text-sm">Head chef</p>
          </div>
        </div>
        <div>
          <Image src={chef2} alt='chef2' width={300} height={500} className='w-full mb-8 lg:mb-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
          <div className="mb-4">
            <p className='font-bold text-xl'>Ferry Sauwi</p>
            <p className="text-sm">Chef</p>
          </div>
        </div>
        <div>
          <Image src={chef3} alt='chef3' width={300} height={500} className='w-full mb-8 lg:mb-0 h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
          <div className="mb-4">
            <p className='font-bold text-xl'>Iswan Dracho</p>
            <p className="text-sm">Chef</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chefs;
