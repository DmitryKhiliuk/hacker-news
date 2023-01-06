import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsAPI} from "../../api/api";


export type initialStateType = [{
    by : string,
    descendants : number,
    id : number,
    kids : Array<number>,
    score : number,
    text?: string
    time : number,
    title : string,
    type : string,
    url : string
}]


export const fetchStoryTC = createAsyncThunk('news/fetchStory', async (id: number, thunkAPI) => {
    try {
        console.log('thunk')
        const res = await newsAPI.getStory(id)
        return res.data
    } catch (error) {
        console.log('error')
    }
})

const slice = createSlice({
    name: 'item',
    initialState: [{}] as initialStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchStoryTC.fulfilled, (state, action) => {
            state.unshift(action.payload)
            return state
        })
    }
})

export const itemReducer = slice.reducer