import React from 'react'

export default function Contact() {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <div className='text-center'>
                <h1 className='text-5xl font-bold mt-10 lg:mt-28 mb-6 lg:mb-11'>Contact us</h1>
                <p className='text-xl'>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-7 mt-7'>
                <input type="text" placeholder='First name' className='bg-gray lg:w-96 h-20 rounded-xl p-7' />
                <input type="text" placeholder='Last name' className='bg-gray lg:w-96 h-20 rounded-xl p-7' />
            </div>
            <div className='flex flex-col justify-center items-center gap-7 mt-7'>
                <input type="text" placeholder='Email address' className='bg-gray lg:w-96 h-20 rounded-xl p-7' />
                <input type="text" placeholder='Subject' className='bg-gray lg:w-96 h-20 rounded-xl p-7' />
            </div>
            <div className='flex flex-col justify-center items-center mt-7'>
                <input type="text" placeholder='Message' className='bg-gray w-[300px] lg:w-[796px] rounded-xl p-7 h-[200px] lg:h-[350px]' />
                <button className='bg-orange mt-8 w-[300px] lg:w-96 h-20 lg:h-24 rounded-3xl text-white hover:text-dark_brown'>Submit</button>
            </div>
        </div>
    )
}
