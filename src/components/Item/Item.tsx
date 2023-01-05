import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {fetchStoryTC} from "./item-reducer";
import {selectItem} from "../../app/selectors";



type ItemType = {
    id: number
}

export const Item = ({id}: ItemType) => {

    const dispatch = useAppDispatch()
    const item = useAppSelector(selectItem)


    useEffect(() => {
            id && dispatch(fetchStoryTC(id))
    }, [id])


    const itemStory = item.find((story) => story.id === id)
    console.log(itemStory)
    return (
        <div>
            {
                itemStory&&itemStory.title
            }
        </div>
    );
};

