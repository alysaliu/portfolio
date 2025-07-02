// src/main.jsx
import './index.css'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   // ← grab createRoot
import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)              // ← initialize the root
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)