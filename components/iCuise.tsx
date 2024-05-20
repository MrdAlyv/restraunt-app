import React from 'react'
import saladItalian from '@/assets/Illustration.png'
import Image from 'next/image'

const ItalianCuise = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center mb-10 lg:mb-28'>
                <div className='w-full lg:w-[600px] px-4 lg:px-0'>
                    <p className='bg-color1 text-orange w-44 h-11 flex justify-center items-center rounded-3xl  mb-6 lg:mb-11'>Restauran</p>
                    <h1 className='text-4xl lg:text-7xl w-full font-extrabold text-dark_brown text-center lg:text-left mb-4 lg:mb-0'>Italian Cuisine</h1>
                    <p className='text-lg lg:text-xl mt-4 lg:mt-7 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                    <button className='bg-orange mt-6 lg:mt-11 text-white flex items-center justify-center w-44 h-14 rounded-3xl'>Order now</button>
                </div>
                {/* PC üçün şekili gösdərməyə */}
                <div className='hidden lg:block w-[550px] mt-8 lg:mt-0'>
                    <Image src={saladItalian} alt='salad' width={550} height={550} className='w-full h-auto rounded-lg' />
                </div>
            </div>
            {/* Mobil telefonlarda şəkili gösdərmek üçün */}
            <div className='block lg:hidden w-full mb-8'>
                <Image src={saladItalian} alt='salad' width={550} height={550} className='w-full h-auto rounded-lg' />
            </div>
        </>
    )
}

export default ItalianCuise;
