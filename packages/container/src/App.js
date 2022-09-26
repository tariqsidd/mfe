import React from 'react'
import MarketingApp from "./mfe/MarketingApp";
import Header from "./mfe/Header";
import {BrowserRouter} from 'react-router-dom'

export default ()=>{
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <MarketingApp/>
            </div>
        </BrowserRouter>
    )
};
