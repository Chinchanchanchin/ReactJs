import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createRoot} from 'react-dom/client';
import DemoState1 from './IncreaseDecrease.js';
import ChangeColor from './ChangeColor';
import Display from './Display';
import Alert from './Alert';
import LogOut from './Logout';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LogOut/>)