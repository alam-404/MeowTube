import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './components/Layout/Home.jsx'

// Route
const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
