import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {fetchStoryTC} from "./item-reducer";
import {selectItem} from "../../app/selectors";
import {Button, Segment} from "semantic-ui-react";
import {NavLink, useParams} from "react-router-dom";



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

