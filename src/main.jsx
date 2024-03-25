import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
