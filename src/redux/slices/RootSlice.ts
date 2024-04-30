import {createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        name: "Name",
        region: "Region",
        type: "Type",
        abv: "ABV",
        price: "Price",
    },
    reducers: {
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseName: (state, action) => {state.name = action.payload},
        chooseRegion: (state, action) => {state.region = action.payload},
        chooseType: (state, action) => {state.type = action.payload},
        chooseABV: (state, action) => {state.abv = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseName, chooseRegion, chooseType, chooseABV, choosePrice} = rootSlice.actions
