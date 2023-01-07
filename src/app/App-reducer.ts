import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppStateType = {
    activeItem: string
}

const slice = createSlice({
    name: 'app',
    initialState: {
        activeItem: 'new'
    } as AppStateType,
    reducers: {
        changeActiveItemAC(state, action: PayloadAction<{activeItem: string}>){
            state.activeItem = action.payload.activeItem
        }
    },
    extraReducers: {}
})

export const appReducer = slice.reducer
export const {
    changeActiveItemAC
} = slice.actions