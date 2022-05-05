import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import Counter from './Count';
import Account from './Count';
import Student from './Count';
import Selector from './Count';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Selector/>)
