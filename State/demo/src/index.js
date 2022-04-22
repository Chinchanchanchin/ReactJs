import React from 'react';

import './index.css';
import {createRoot} from 'react-dom/client';
import StateDemo from './Demo';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<StateDemo/>);
