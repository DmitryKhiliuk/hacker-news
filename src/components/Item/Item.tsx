import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {selectItem} from "../../app/selectors";
import {Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {fetchStoryTC} from "./item-reducer";


type ItemType = {
    id: number
}

export const Item = ({id}: ItemType) => {

    const dispatch = useAppDispatch()
    const item = useAppSelector((state) => selectItem(state,id))



    useEffect(() => {
        dispatch(fetchStoryTC(id))
    }, [id])


    return (
        <div>
            <NavLink to={`/${id}`}><Segment raised>{item&&item.title}</Segment></NavLink>
        </div>
    );
};

