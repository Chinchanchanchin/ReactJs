import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const item = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"]
const fruits = React.createElement(
    "div", {id: "coding"},React.createElement(
        "h1", null, "list of fruits"
    ), React.createElement(
        "ul", {className: "coding"}, 
        item.map((coding, i) => (
            React.createElement("li", {key: i}, coding)
        ))
    )
)

const fruits = (
    <div>
        <ul >
            {item.map((item) =>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(fruits);
