import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';


const browses = (
    <h4>Browser's details: { navigator.userAgent }</h4>
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(browses);
