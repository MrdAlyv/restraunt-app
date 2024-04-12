import { configureStore } from "@reduxjs/toolkit";
import AnnouncementReducer from "@/app/store/features/announcement.slice"


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
        'announcement': AnnouncementReducer
    }
})