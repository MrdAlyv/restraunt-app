import { configureStore } from "@reduxjs/toolkit";
import AnnouncementReducer from "@/app/store/features/announcement.slice"
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// store.ts

import menuReducer from '@/app//store/menuSlice';



// RootState ve AppThunk tip tanımlamalarını buraya ekleyin
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;



type Icard = {
    name: string,
    price: number,
    foodImage: HTMLImageElement,
    id: any,
    title: string;
}


export interface IStateCard {
    announcement: Icard[],
}



export const store = configureStore({
    reducer: {
        'announcement': AnnouncementReducer,
        menu: menuReducer,

    }
})