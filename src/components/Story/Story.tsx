import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app/store";
import {selectItem} from "../../app/selectors";

export const Story = () => {


    const {id} = useParams()
    const item = useAppSelector((state) => selectItem(state, Number(id)))

    return (
        <div>
            story
            {id}
        </div>
    );
};

