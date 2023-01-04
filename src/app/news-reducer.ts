import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsAPI} from "../api/api";

export const fetchNewsTC = createAsyncThunk('news/fetchNews', async () => {
    try{
        const res = await newsAPI.getNews()
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log('error')
    }

})

const slice = createSlice({
    name: 'news',
    initialState: [] as number[],
    reducers: {},
    extraReducers: builder =>  {
        builder.addCase(fetchNewsTC.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const newsReducer = slice.reducer