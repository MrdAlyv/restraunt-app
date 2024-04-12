import React from 'react'
import aboutimg from "@/assets/unsplash_eBmyH7oO5wY.png"
import aboutimg2 from '@/assets/unsplash_5dsZnCVDHd0.png'
import aboutChef from '@/assets/aboutchef.png'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <div>
            <div className='flex flex-row  justify-around items-center'>
                <div className='bg-gray rounded-full w-[500px] h-[500px] flex justify-center items-center'>
                    <Image src={aboutimg} alt='imgAbout' width={400} height={400} />
                </div>
                <div>
                    <h1 className='text-start text-orange text-4xl font-extrabold'>Our</h1>
                    <h1 className='text-start text-4xl  font-extrabold'>Restautant</h1>
                    <p className='w-96 mt-11 leading-8 text-dark_brown'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere aspernatur, inventore possimus impedit tenetur quas praesentium amet aut, libero perferendis, numquam quos enim maiores totam?inventore possimus impedit tenetur quas praesentium amet aut, libero perferendis, numquam quos enim maiores totam</p>
                </div>
            </div>
            <div className='flex flex-row justify-around items-center mt-28 '>
                <div>
                    <p className='w-96 leading-8 text-dark_brown'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti optio corporis iure quisquam modi sint labore aliquam minus debitis reprehenderit neque, dolore aliquid soluta adipisci eos ipsam velit nostrum iusto,dolore aliquid soluta adipisci eos ipsam velit nostrum iusto,adipisicing elit. Corrupti optio corporis iure quisquam modi sint labore aliquam minus debitis reprehenderit neque, dolore aliquid soluta adipisci eos ipsam velit nostrum iusto,dolore aliquid soluta adipisci</p>
                </div>
                <div className='w-[500px] h-[500px] flex justify-center items-center bg-gray rounded-full'>
                    <Image src={aboutimg2} alt='img' width={400} height={400} />
                </div>
            </div>
            <div className='flex flex-row justify-around items-center mt-28'>
                <div >
                    <Image src={aboutChef} alt='chef' width={300} height={500} />
                </div>
                <div>
                    <h1 className='text-6xl font-bold'><span className='text-orange'>Owner</span> &<br /> Executive Chef</h1>
                    <h2 className='text-3xl font-bold my-11'>Ismail Marzuki</h2>
                    <p className='w-96 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>
        </div>
    )
}
