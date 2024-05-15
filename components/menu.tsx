'use client'
import useSWR from 'swr';
import StarRating from './starRating';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Image from 'next/image';
import defaultFood from "@/assets/defaultFood.png";
import { toggleLunch, selectShowLunch, toggleDinner, toggleSalad, selectShowDinner, selectShowSalad, toggleAllCategories } from '@/app/store/menuSlice';
import ICard from '@/app/dataType';

const Menu = () => {
    const fetcher = (...args: any) => fetch(args).then(res => res.json());
    const { data} = useSWR('/api/foods', fetcher);
    const [allCategoriesSelected, setAllCategoriesSelected] = useState(true);
    const dispatch = useDispatch();
    const showLunch = useSelector(selectShowLunch);
    const showDinner = useSelector(selectShowDinner);
    const showSalad = useSelector(selectShowSalad);

    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const handleToggleAllCategories = () => {
        if (allCategoriesSelected) {
            dispatch(toggleAllCategories());
            setAllCategoriesSelected(false);
            setSelectedCategory('all');
        } else {
            dispatch(toggleLunch());
            dispatch(toggleDinner());
            dispatch(toggleSalad());
            setAllCategoriesSelected(true);
            setSelectedCategory('all');
        }
    };

    const handleToggleLunch = () => {
        dispatch(toggleLunch());
        if (showDinner) {
            dispatch(toggleDinner());
        }
        if (showSalad) {
            dispatch(toggleSalad());
        }
        setAllCategoriesSelected(false);
        setSelectedCategory('lunch');
    };

    const handleToggleDinner = () => {
        dispatch(toggleDinner());
        if (showLunch) {
            dispatch(toggleLunch());
        }
        if (showSalad) {
            dispatch(toggleSalad());
        }
        setAllCategoriesSelected(false);
        setSelectedCategory('dinner');
    };

    const handleToggleSalad = () => {
        dispatch(toggleSalad());
        if (showLunch) {
            dispatch(toggleLunch());
        }
        if (showDinner) {
            dispatch(toggleDinner());
        }
        setAllCategoriesSelected(false);
        setSelectedCategory('salad');
    };
    const buttonClassAll = selectedCategory === 'all' ? 'text-white bg-black p-4 rounded-xl' : '';
    const buttonClassLunch = selectedCategory === 'lunch' ? 'text-white bg-black p-4 rounded-xl' : '';
    const buttonClassDinner = selectedCategory === 'dinner' ? 'text-white bg-black p-4 rounded-xl' : '';
    const buttonClassSalad = selectedCategory === 'salad' ? 'text-white bg-black p-4 rounded-xl' : '';

    const filteredItems = data?.results?.filter((item: any) => {
        if (showLunch && item.category === 'lunch') {
            return true;
        }
        if (showDinner && item.category === 'dinner') {
            return true;
        }
        if (showSalad && item.category === 'salad') {
            return true;
        }
        return false;
    });
    const allItems = allCategoriesSelected ? data?.results : filteredItems;
    return (
        <div>
            <div className='flex flex-row gap-24 mx-11 '>
                <button onClick={handleToggleAllCategories} className={buttonClassAll}>All Categories</button>
                <button onClick={handleToggleLunch} className={buttonClassLunch}>Lunch</button>
                <button onClick={handleToggleDinner} className={buttonClassDinner}>Dinner</button>
                <button onClick={handleToggleSalad} className={buttonClassSalad}>Salad</button>
            </div>
            <ul className='grid grid-cols-3 gap-24 m-11 justify-center items-center'>
                {allItems?.map((item: ICard, index: any) => {
                    const { id, name, price, foodImage, title } = item;
                    return (
                        <li key={index} className='bg-gray rounded-3xl w-80 flex flex-col justify-center items-center'>
                            <Image src={defaultFood} alt={name} className='w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110' />
                            <h2 className='text-2xl font-semibold'>{name}</h2>
                            <StarRating totalStars={5} />
                            <p className='w-80 text-center m-2'>{title}</p>
                            <p className='font-semibold text-xl mb-3'> ${price}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;
