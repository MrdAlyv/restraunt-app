import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs';
import Logo from '@/assets/Logo Delizioso.png'
import Link from 'next/link';
export default async function Nav() {
    const user = await currentUser();
    return (
        <div className='flex flex-row justify-between m-6'>
            <div className='LOGO flex gap-4 justify-center items-center'>
                <div className="bg-orange w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white">D</div>
                <div className="text-xl font-semibold"><p>Delizi<span className=' text-orange'>oso</span></p></div>
            </div>
            <div className='flex flex-row justify-center items-center gap-11'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Menu</Link>
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Order online</Link>
                <Link href={"/"}>Contact us</Link>



            </div>
            <div className='flex flex-row items-center gap-2'>
                <p>{user?.username}</p>
                <UserButton />
            </div>
        </div>

    )
}
