import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';



const name = React.createElement("h1", {style: {textAlign: "center"}}, "your name")



const container = document.getElementById('root');
const root = createRoot(container);
root.render(name);
