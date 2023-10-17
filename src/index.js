import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './stylesheets/index.css';
import router from './data/router';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <RouterProvider router={router} /> );

