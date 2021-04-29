import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_color: 'color placeholder',
        car_make: 'make placeholder',
        car_model : 'model placeholder',
        car_year: 'year placeholder',
    },
    reducers: {
        chooseColor: (state, action) => { state.car_color = action.payload },
        chooseMake: (state, action) => { state.car_make = action.payload }
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseColor, chooseMake, } = rootSlice.actions;