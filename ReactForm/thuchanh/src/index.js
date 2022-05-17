import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import FormikForm from './FormikForm';
import SignUpForm from './SignUp';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<FormikForm/>)