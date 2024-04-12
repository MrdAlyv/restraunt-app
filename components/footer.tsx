import React from 'react'
import Image from 'next/image'
import Facebook from "@/assets/Facebook.png"
import Instagram from '@/assets/Instagram.png'
import Twitter from '@/assets/Twitter.png'
import Link from 'next/link'
export default function Footer() {
    return (
        <>
            <div className=' bg-dark_brown w-full h-96 mt-96 flex flex-row text-white p-11 gap-48   '>
                <div >
                    <div className='LOGO flex gap-4 justify-start items-center mb-7'>
                        <div className="bg-orange w-11 h-11 rounded-full flex items-center justify-center text-2xl text-white">D</div>
                        <div className=" text-lg font-semibold"><p>Delizi<span className=' text-orange'>oso</span></p>
                        </div>
                    </div>
                    <div className=' mb-11  w-64'>
                        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
                    </div>
                    <div className='flex flex-row gap-7'>
                        <Image src={Twitter} alt='TW' className=' cursor-pointer' />
                        <Image src={Instagram} alt='IG' className=' cursor-pointer' />
                        <Image src={Facebook} alt='FB' className=' cursor-pointer' />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-orange text-2xl font-semibold'>Page</h1>
                    </div>
                    <div className='flex flex-col gap-7 mt-7'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/menu"}>Menu</Link>
                        <Link href={"/about-us"}>About us</Link>
                        <Link href={"/"}>Order online</Link>
                        <Link href={"/contact-us"}>Contact us</Link>
                    </div>

                </div>

                <div>

                    <h1 className='text-orange text-2xl font-semibold'>Information</h1>
                    <div className='flex flex-col gap-7 mt-7'>
                        <Link href={"/about-us"}>About us</Link>
                        <Link href={"/"}>Testimonial</Link>
                        <Link href={"/"}>Event</Link>


                    </div>



                </div>
                <div>
                    <h1 className='text-orange text-2xl font-semibold mb-7'  >Get in touch</h1>
                    <p className='w-64 mb-7'>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                    <p className='mb-7'>delizioso@gmail.com</p>
                    <p>+123 4567 8901</p>
                </div>

            </div>
            <p className=' bg-dark_brown  text-center text-white text-xl pb-7'>Copyright © 2022 Delizioso</p>
        </>
    )
}
