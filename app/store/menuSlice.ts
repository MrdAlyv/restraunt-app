
import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@/app//store/features/index'; 

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        showLunch: true,
        showDinner: true,
        showSalad: true,
    },
    reducers: {
        toggleLunch: state => {
            state.showLunch = !state.showLunch;
        },
        toggleDinner: state => {
            state.showDinner = !state.showDinner
        },
        toggleSalad: state => {
            state.showSalad = !state.showSalad
        },
        toggleAllCategories: (state) => {
            const { showLunch, showDinner, showSalad } = state;
            
            if (showLunch && showDinner && showSalad) {
                state.showLunch = false;
                state.showDinner = false;
                state.showSalad = false;
            } else { 
                state.showLunch = true;
                state.showDinner = true;
                state.showSalad = true;
            }
        },
    },
});
export const { toggleLunch, toggleDinner, toggleSalad, toggleAllCategories } = menuSlice.actions;
export const selectShowLunch = (state: RootState) => state.menu.showLunch;
export const selectShowDinner = (state: RootState) => state.menu.showDinner;
export const selectShowSalad = (state: RootState) => state.menu.showSalad;

export default menuSlice.reducer;
