'use client'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { IStateCard } from '@/app/store/features'
import React,{useState, useEffect} from 'react';
import Image from 'next/image'
import ICard from '@/app/dataType'
import defaultFood from '@/assets/defaultFood.png'

export default function Order() {
    const fetcher = (...args: any) => fetch(args).then(res => res.json())
    const datas = useSelector((state: IStateCard) => state.announcement)
    const [selectedCards, setSelectedCards] = useState<ICard[]>([]);
    const { data, error, isLoading } = useSWR('/api/foods', fetcher);
    const id = data?.results ? Array.from(new Set(data.results.map((item: any) => item.id))) : [];
    const name = data?.results ? Array.from(new Set(data.results.map((item: any) => item.name))) : [];
    const price = data?.results ? Array.from(new Set(data.results.map((item: any) => item.price))) : [];
    const foodImage = data?.results ? Array.from(new Set(data.results.map((item: any) => item.foodImage))) : [];
    const title = data?.results ? Array.from(new Set(data.results.map((item: any) => item.title))) : [];
    const handleOrderNow = (item: ICard) => {
        setSelectedCards(prevCards => [...prevCards, item]);
    };
    const handleRemoveItem = (index: number) => {
        setSelectedCards(prevCards => prevCards.filter((_, i) => i !== index));
    };
    return (
        <div className='flex flex-row'>
            <div>
                <ul className='grid grid-cols-3    gap-40 m-11 w-4/6  justify-center items-center'>

                    {data?.results?.map((item: ICard, index: number) => {
                        const { id, name, price, foodImage, title } = item;
                        return (
                            <li key={index} className='bg-gray rounded-3xl  w-64 flex flex-col justify-center items-center' >
                                <Image src={defaultFood} alt={name} width={250} height={250} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
                                <h2 className=' text-2xl font-semibold'>{name}</h2>
                                <p className='  text-center m-2'>{title}</p>
                                <div className='flex flex-row  items-center justify-center gap-3'>
                                    <p className='font-semibold text-xl mb-3'> {price}</p>
                                    <button onClick={() => handleOrderNow(item)}className='bg-orange text-white h-11 rounded-xl'>Order now</button>
                                </div>
                            </li>
                        );
                    })}

                </ul>
            </div>
            <div className='bg-gray  w-64 flex flex-col  items-center rounded-xl'>
                <h1 className=' bg-dark_blue text-white w-56 h-20 flex items-center justify-center rounded-2xl mt-4'>Order List</h1>
                <div>
                {selectedCards.map((card, index) => (
                        <div key={index}>
                            <h2>{card.name}</h2>
                            <p>{card.price}</p>
                            <button onClick={() => handleRemoveItem(index)}>Remove</button>
                        </div> 
                    ))}                    
                </div>
            </div>
        </div>
    )
}

