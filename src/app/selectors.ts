import {AppRootStateType} from "./store";

export const selectNewsId = (state: AppRootStateType) => state.newsReducer
export const selectItem = (state: AppRootStateType) => state.itemReducer