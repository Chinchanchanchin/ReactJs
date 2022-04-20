import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

// const timeToday = () => { React.createElement("div", {style: {textAlign:"center"}},
//     React.createElement("h1",null, "hello world"),
//     React.createElement("h2", null, new Date().toLocaleTimeString())
// )}

const timeToday =
    (
        <div>
            <h1>hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )

const container = document.getElementById('root');
const root = createRoot(container);
root.render(timeToday);

