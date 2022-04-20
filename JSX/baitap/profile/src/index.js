import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

const profileCard = (
    <div className="container">
        <div className="card">
            <div className="card--header"></div>
                <img className="avatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar"></img>
                <div className="card--body">
                    <div>
                        <p className="text-header">Ruma Khan</p>
                        <p className="text-sub"> Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                        <button className="btn third">FOLLOW</button> 
                </div>
            </div>
        </div>
    </div>
)


const container = document.getElementById('root');
const root = createRoot(container);
root.render(profileCard);




