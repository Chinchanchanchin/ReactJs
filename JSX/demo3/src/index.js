import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

// const myName = (
//     <div style= {{textAlign: "center"}}>
//         <h3>my name</h3>
//     </div>
// )

// const item = ["orange", "banana", "kiwi", "apple"];
// const fruits = (
//     <div>
//         <ul>
//             {item.map((item)=>(
//                 <li>{item}</li>
//             ))}
//         </ul>
//     </div>
// );

// const setTime = (
//     <div>
//         <h1>Hello world</h1>
//         <p>It is{new Date().toLocaleTimeString()}</p>
//     </div>
// )

const container = document.getElementById('root');
const root = createRoot(container);
let stick = () => {
    root.render(
      <div>
        <h1>Hello world</h1>
        <h2>It's {`${new Date().toLocaleString()}`}</h2>
      </div>
    );
  }
  
  setInterval(stick, 1000);

