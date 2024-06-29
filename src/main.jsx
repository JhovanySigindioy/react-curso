import React from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './components/GifExpertApp'
import './css/styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
