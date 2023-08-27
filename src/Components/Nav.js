import '../index.css';
import App from '../App';
import React, { useState, useEffect } from 'react';


function Nav({setTopic}) {

    const onButtonClick=(type) =>{
        setTopic(type)
    }

return (

    <nav className="mb-12 bg-slate-100 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
            <button onClick={()=>onButtonClick('BreakingNews')} className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">News API</button>
        </div>
        <div>
            <button onClick={()=>onButtonClick('Sports')} className="text-lg pr-6 no-underline text-grey-darkest hover:text-blue-dark ml-2">Sports</button>
            <button onClick={()=>onButtonClick('Politics')} className="text-lg pr-6 no-underline text-grey-darkest hover:text-blue-dark ml-2">Politics</button>
            <button onClick={()=>onButtonClick('USNews')} className="text-lg pr-6 no-underline text-grey-darkest hover:text-blue-dark ml-2">US News</button>
            <button onClick={()=>onButtonClick('WorldNews')} className="text-lg pr-6 no-underline text-grey-darkest hover:text-blue-dark ml-2">World News</button>
        </div>
    </nav>

);
}

export default Nav;
