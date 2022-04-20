import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const items = ["C++", "Java", "PHP"];
const programming = React.createElement(
    "section", {id: "coding"}, 
    React.createElement("h1", null, "Programming Languages"
    , 
    React.createElement("ul", {className: "coding"},
    items.map((coding, i) => 
    React.createElement("li", {key: i}, coding),
    )
    )
    )
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(programming);
