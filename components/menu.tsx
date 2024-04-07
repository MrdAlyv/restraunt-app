'use client'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { IStateCard } from '@/app/store/features'
import React from 'react'
import Image from 'next/image'

const Menu = () => {
    const fetcher = (...args: any) => fetch(args).then(res => res.json())
    const datas = useSelector((state: IStateCard) => state.announcement)
    console.log(datas)
    
    const { data, error, isLoading } = useSWR('/api/foods', fetcher);
    const id = data?.results ? Array.from(new Set(data.results.map((item: any) => item.id))) : [];
    const name = data?.results ? Array.from(new Set(data.results.map((item: any) => item.name))) : [];
    const price = data?.results ? Array.from(new Set(data.results.map((item: any) => item.price))) : [];
    const foodImage = data?.results ? Array.from(new Set(data.results.map((item: any) => item.foodImage))) : [];
    const title = data?.results ? Array.from(new Set(data.results.map((item: any) => item.title))) : [];
    return (
        <div>
            <h1>Foods</h1>
            <ul>
            {data?.results.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                        <img src={item.foodImage} alt={item.name} />
                        <p>Title: {item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu
