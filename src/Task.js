import React from 'react';
import './App.css';
export default function Task({taskName}) {
    return (
        <div className='div1'>
        <div className='task'>
            <input type="checkbox"></input>
            <h1>{taskName} </h1>
            <button style={{align:"center"}}>Delete</button>
        </div>
        </div>
    );
}