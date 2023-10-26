import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './stylesheets/index.css';
import router from './data/router';

const jsonServer = require('json-server')
    
const cors = require('cors');

const server = jsonServer.create()       

server.use(cors());




const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <RouterProvider router={router} /> );

