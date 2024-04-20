import React from 'react'
import { SlBasket } from "react-icons/sl";
import Link from 'next/link';
import MenuPage from '@/app/menu/page';
import { useRouter } from 'next/navigation';
export default function Nav() {
    const router = useRouter()
    return (
        <div className='flex flex-row justify-between m-6'>
            <div className='LOGO flex gap-4 justify-center items-center'>
                <div className="bg-orange w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white">D</div>
                <div className="text-xl font-semibold"><p>Delizi<span className=' text-orange'>oso</span></p></div>
            </div>
            <div className='flex flex-row justify-center items-center gap-11'>
                <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Menu</Link>
                <Link href={"/about-us"}>About us</Link>
                <Link href={"/order-online"}>Order online</Link>
                <Link href={"/contact-us"}>Contact us</Link>



            </div>
            <div className='flex flex-row items-center gap-28'>
                <SlBasket />
                <button className=' w-24 h-11 bg-green rounded-2xl text-white ' onClick={() => router.push("/log-in")}>
                    Log in
                </button>
            </div>

        </div>

    )
}
