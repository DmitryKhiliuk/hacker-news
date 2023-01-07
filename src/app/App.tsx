import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store";
import {fetchBestNewsTC, fetchNewsTC, fetchTopNewsTC} from "./news-reducer";
import {selectActiveItem, selectNewsId} from "./selectors";
import {Item} from "../components/Item/Item";
import {Route, Routes} from "react-router-dom";
import {Story} from "../components/Story/Story";
import {HeadEr} from "../components/HeadEr/HeadEr";

function App() {
    const dispatch = useAppDispatch()
    const newsId = useAppSelector(selectNewsId)
    const activeItem = useAppSelector(selectActiveItem)

    useEffect(() => {
        if (activeItem==='new'){
            dispatch(fetchNewsTC())
        }
        if (activeItem==='top'){
            dispatch(fetchTopNewsTC())
        }
        if (activeItem==='best'){
            dispatch(fetchBestNewsTC())
        }

    }, [activeItem])

    return (
        <div className="App">
            <HeadEr/>
            <Routes>
                <Route path={'/'} element={newsId && newsId.map((id) => (<Item key={id} id={id}/>))}/>
                <Route path={'/:id'} element={<Story/>}/>
            </Routes>

        </div>
    );
}

export default App;
