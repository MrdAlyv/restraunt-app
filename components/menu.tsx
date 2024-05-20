'use client'
import useSWR from 'swr';
import StarRating from './starRating';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { toggleLunch, selectShowLunch, toggleDinner, toggleSalad, selectShowDinner, selectShowSalad, toggleAllCategories } from '@/app/store/menuSlice';
import ICard from '@/app/dataType';

const Menu = () => {
    const fetcher = (...args: any) => fetch(args).then(res => res.json());
    const { data } = useSWR('/api/foods', fetcher);
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
        <div className='p-4'>
            <div className='flex flex-wrap gap-4 justify-center mb-8'>
                <button onClick={handleToggleAllCategories} className={`${buttonClassAll} px-4 py-2 rounded-xl border`}>All Categories</button>
                <button onClick={handleToggleLunch} className={`${buttonClassLunch} px-4 py-2 rounded-xl border`}>Lunch</button>
                <button onClick={handleToggleDinner} className={`${buttonClassDinner} px-4 py-2 rounded-xl border`}>Dinner</button>
                <button onClick={handleToggleSalad} className={`${buttonClassSalad} px-4 py-2 rounded-xl border`}>Salad</button>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {allItems?.map((item: ICard, index: number) => {
                    const { id, name, price, image, title } = item;
                    return (
                        <li key={index} className='bg-gray rounded-3xl w-full lg:w-80 flex flex-col justify-center items-center'>
                            <img src={image} alt={name} className='w-full lg:w-96 h-48 lg:h-auto object-cover rounded-t-3xl mb-4' />
                            <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
                            <StarRating totalStars={5} />
                            <p className='text-center m-2 lg:w-80'>{title}</p>
                            <p className='font-semibold text-xl mb-3'>${price}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;
