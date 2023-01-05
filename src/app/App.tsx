import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store";
import {fetchNewsTC} from "./news-reducer";
import {selectNewsId} from "./selectors";
import {Item} from "../components/Item/Item";

function App() {
    const dispatch = useAppDispatch()
    const newsId = useAppSelector(selectNewsId)


    useEffect(() => {
        dispatch(fetchNewsTC())
    }, [])
    return (
        <div className="App">
            {newsId && newsId.map((id) => (
                <Item key={id}
                      id={id}

                />
            ))}
        </div>
    );
}

export default App;
