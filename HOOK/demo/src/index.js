import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import Increase from './Account';
import Count from './Count';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Count/>)
