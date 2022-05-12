import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './index.css';
import App from './App';

// new react router 6 way of routing
const element = document.getElementById('root');
const root = createRoot(element);
root.render(<StrictMode><App /></StrictMode>);

