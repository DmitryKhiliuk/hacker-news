import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {selectItem} from "../../app/selectors";
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

    useEffect(() => {
        dispatch(fetchStoryTC(id))
    }, [id])

    let date
    if(item){
        date = moment(+(item.time + '000')).format('dddd, MMMM DD YYYY, h:mm:ss')
    }
    return (
        <div>
            <NavLink to={`/${id}`}><Segment raised>
                <Header as={'h5'}>{item&&item.title}</Header>
                <Header as={'h5'}>{String(date)}</Header>
            </Segment></NavLink>
        </div>
    );
};

