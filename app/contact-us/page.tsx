import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='text-center'>
                <h1 className=' text-5xl font-bold mt-28 mb-11'>Contact us</h1>
                <p className='text-xl'>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            </div>
            <div className='flex justify-center items-center gap-7 mt-7'>
                <div>
                    <input type="text" placeholder='First name' className=' bg-gray w-96 h-20 rounded-xl p-7' />
                </div>
                <div>
                    <input type="text" placeholder='Last name' className=' bg-gray w-96 h-20 rounded-xl p-7' />
                </div>




            </div>
            <div className='flex justify-center items-center gap-7 mt-7'>
                <div>
                    <input type="text" placeholder='Email address' className=' bg-gray w-96 h-20 rounded-xl p-7' />
                </div>
                <div>
                    <input type="text" placeholder='Subject' className=' bg-gray w-96 h-20 rounded-xl p-7' />
                </div>




            </div>
            <div className='flex flex-col justify-center items-center mt-7'>
            <input type="text" placeholder='Message' className=' bg-gray w-[796px]  rounded-xl p-7 h-[350px] ' />
            <button className='  bg-orange mt-24 w-96 h-24 rounded-3xl text-white hover:text-dark_brown'>Sumbit</button>

            </div>
        </div>


    )
}
