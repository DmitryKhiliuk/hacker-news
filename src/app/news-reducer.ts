import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsAPI} from "../api/api";

export const fetchNewsTC = createAsyncThunk('news/fetchNews', async () => {
    try {
        const res = await newsAPI.getNews()
        return res.data.slice(0, 100)
    } catch (error) {
        console.log('error')
    }
})
export const fetchTopNewsTC = createAsyncThunk('news/fetchTopNews', async () => {
    try {
        const res = await newsAPI.getTopNews()
        return res.data.slice(0, 100)
    } catch (error) {
        console.log('error')
    }
})
export const fetchBestNewsTC = createAsyncThunk('news/fetchBestNews', async () => {
    try {
        const res = await newsAPI.getBestNews()
        return res.data.slice(0, 100)
    } catch (error) {
        console.log('error')
    }
})

const slice = createSlice({
    name: 'news',
    initialState: [] as number[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNewsTC.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(fetchTopNewsTC.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(fetchBestNewsTC.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const newsReducer = slice.reducer