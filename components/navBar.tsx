import React, { useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
const router=useRouter();

    return (
        <div className='flex flex-col md:flex-row md:justify-between m-6'>
            <div className='flex justify-between items-center'>
                <div className='LOGO flex gap-4 justify-center items-center'>
                    <div className='bg-orange w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white'>D</div>
                    <div className='text-xl font-semibold'>
                        <p>Delizi<span className='text-orange'>oso</span></p>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:flex md:flex-row md:items-center ${isOpen ? 'flex flex-col items-center' : 'hidden'} gap-11`}>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/about-us'>About us</Link>
                <Link href='/order-online'>Order online</Link>
                <Link href='/contact-us'>Contact us</Link>
            </div>
            {/* Basket and Log in */}
            <div className='hidden md:flex md:flex-row items-center gap-4'>
                <SlBasket />
                <button onClick={() => router.push("/log-in")} className='w-24 h-11 bg-green rounded-2xl text-white'>
                    Log in
                </button>
            </div>
        </div>
    );
}
