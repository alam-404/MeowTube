import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './components/Layout/Home.jsx'
import App from './App.jsx'

// Route
const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
