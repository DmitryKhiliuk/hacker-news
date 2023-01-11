import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {selectItem, selectNewsId} from "../../app/selectors";
import {Header, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {fetchStoryTC} from "./item-reducer";
import moment from "moment";


type ItemType = {
    id: number
}

export const Item = ({id}: ItemType) => {

    const dispatch = useAppDispatch()
    const item = useAppSelector((state) => selectItem(state,id))
    const newsId = useAppSelector(selectNewsId)

    useEffect(() => {
       dispatch(fetchStoryTC(id))
    }, [newsId])

    let date
    if(item){
        date = moment(+(item.time + '000')).format('MMMM Do YYYY, h:mm:ss a')
    }

    return (
        <div>
            <NavLink to={`/${id}`}><Segment raised>
                <Header as={'h4'}>{item&&item.title}</Header>
                <Header as={'h5'}>{String(date)}</Header>
                <Header as={'h5'}>{item&&item.score}</Header>
            </Segment></NavLink>
        </div>
    );
};

