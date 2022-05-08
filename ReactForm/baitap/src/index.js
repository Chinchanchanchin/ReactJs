import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client"
import FormLienHe from './FormLienHe';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<FormLienHe/>)
