import {AppRootStateType} from "./store";

export const selectNewsId = (state: AppRootStateType) => state.newsReducer
export const selectItem = (state: AppRootStateType, id: number) => state.itemReducer.find((story) => story.id === id)