'use client'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { IStateCard } from '@/app/store/features'
import React from 'react'
import Image from 'next/image'
import ICard from '@/app/dataType'
import defaultFood from '@/assets/defaultFood.png'
const Menu = () => {
    const fetcher = (...args: any) => fetch(args).then(res => res.json())
    const datas = useSelector((state: IStateCard) => state.announcement)

    const { data, error, isLoading } = useSWR('/api/foods', fetcher);
    const id = data?.results ? Array.from(new Set(data.results.map((item: any) => item.id))) : [];
    const name = data?.results ? Array.from(new Set(data.results.map((item: any) => item.name))) : [];
    const price = data?.results ? Array.from(new Set(data.results.map((item: any) => item.price))) : [];
    const foodImage = data?.results ? Array.from(new Set(data.results.map((item: any) => item.foodImage))) : [];
    const title = data?.results ? Array.from(new Set(data.results.map((item: any) => item.title))) : [];
    return (
        <div>
            <ul className='grid grid-cols-3 gap-24 m-11 justify-center items-center'>
        
                {data?.results?.map((item: ICard, index: number) => {
                    const { id, name, price, foodImage, title } = item;
                    return (
                        <li key={index} className='bg-gray rounded-3xl w-80 flex flex-col justify-center items-center' >
                            <Image src={defaultFood} alt={name} width={250} height={250} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
                            <h2 className=' text-2xl font-semibold'>{name}</h2>
                            <p className=' w-80 text-center m-2'>{title}</p>
                            <p className='font-semibold text-xl mb-3'> ${price}</p>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
}

export default Menu