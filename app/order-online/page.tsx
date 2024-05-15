
'use client'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { IStateCard } from '@/app/store/features'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ICard from '@/app/dataType'
import defaultFood from '@/assets/defaultFood.png'
import { RiDeleteBin6Fill } from "react-icons/ri";
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
        const existingIndex = selectedCards.findIndex((card) => card.id === item.id);
        if (existingIndex !== -1) {
            const updatedCards = [...selectedCards];
            updatedCards[existingIndex].quantity += 1;
            setSelectedCards(updatedCards);
        } else {
            setSelectedCards(prevCards => [...prevCards, { ...item, quantity: 1 }]);
        }
    };

    const handleReduceQuantity = (index: number) => {
        const updatedCards = [...selectedCards];
        if (updatedCards[index].quantity > 1) {
            updatedCards[index].quantity -= 1;
            setSelectedCards(updatedCards);
        } else {
            handleRemoveItem(index);
        }
    };

    const handleIncreaseQuantity = (index: number) => {
        const updatedCards = [...selectedCards];
        updatedCards[index].quantity += 1;
        setSelectedCards(updatedCards);
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
                            <li key={index} className='bg-gray rounded-3xl  w-64 h-[500px] flex flex-col justify-center items-center' >
                                <Image src={defaultFood} alt={name} width={250} height={250} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
                                <h2 className=' text-2xl font-semibold'>{name}</h2>
                                <p className='  text-center m-2'>{title}</p>
                                <div className='flex justify-center items-center gap-11'>
                                    <p className='font-semibold text-2xl  flex justify-center items-center'>$ {price}</p>
                                    <button onClick={() => handleOrderNow(item)} className='bg-orange text-white h-11 rounded-xl flex justify-center items-center'>Order now</button>
                                </div>
                            </li>
                        );
                    })}

                </ul>
            </div>
            <div className='bg-gray  w-80 flex flex-col  items-center rounded-xl'>
                <h1 className=' bg-dark_blue text-white w-56 h-20 flex items-center justify-center rounded-2xl mt-4'>Order List</h1>
                <div>
                    {selectedCards.map((card, index) => (
                        <div key={index}>
                            <div className=' flex flex-row justify-between items-center gap-12 mt-7 '>
                                <div className="flex items-center m-4">
                                    <h2 className=' text-2xl font-bold'>
                                        {card.name}
                                    </h2>
                                </div>
                                <RiDeleteBin6Fill onClick={() => handleRemoveItem(index)} className=' cursor-pointer w-6 h-6' />
                            </div>
                            <div className="flex items-center gap-2 m-1">
                                <button onClick={() => handleReduceQuantity(index)} className='text-red-500  text-red bg-white rounded-full w-7 h-7'>-</button>
                                <span className="text-sm mx-1">x{card.quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(index)} className='text-green-500  text-green bg-white rounded-full w-7 h-7' >+</button>
                                <p className='text-orange text-lg font-bold'>${(card.price * card.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}

                    <div className='mt-11'>
                        <h2 className='text-xl font-bold  '>Total:  <span className='text-orange'>$ {(selectedCards.reduce((total, card) => total + (card.price * card.quantity), 0)).toFixed(2)}</span></h2>
                    </div>



                </div>
            </div>
        </div>
    )
}