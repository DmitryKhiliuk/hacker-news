import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store";
import {fetchNewsTC} from "./news-reducer";
import {selectNewsId} from "./selectors";
import {Item} from "../components/Item/Item";
import {log} from "util";
import {Route, Routes} from "react-router-dom";
import {Story} from "../components/Story/Story";

function App() {
    const dispatch = useAppDispatch()
    const newsId = useAppSelector(selectNewsId)


    useEffect(() => {
        dispatch(fetchNewsTC())
    }, [])
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={newsId && newsId.map((id) => (<Item key={id} id={id}/>))}/>
                <Route path={'/:id'} element={<Story/>}/>
            </Routes>

        </div>
    );
}

export default App;
