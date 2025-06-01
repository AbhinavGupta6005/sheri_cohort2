import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx';
import "./components/index.css"
import{ToastContainer} from "react-toastify";
// import 'react-toastify/disk/ReactToastify.css';

createRoot(document.getElementById('root')).render(

    <div>
        <App />
        
    </div>      
    

);
