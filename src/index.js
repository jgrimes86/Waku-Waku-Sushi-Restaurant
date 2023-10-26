import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './stylesheets/index.css';
import router from './data/router';

const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <RouterProvider router={router} /> );

