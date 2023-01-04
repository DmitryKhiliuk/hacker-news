import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from "./store";
import {fetchNewsTC} from "./news-reducer";

function App() {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchNewsTC())
    }, [])
    return (
        <div className="App">

        </div>
    );
}

export default App;
