import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AuthLayout from "./Auth/AuthLayout"
import Tweets from "./pages/Tweets"
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import Playlist from './pages/Playlist.tsx'
import Subscriptions from './pages/Subscriptions.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'tweets',
        element: <Tweets/>
      },
      {
        path: 'playlists',
        element: <Playlist/>
      },
      {
        path: '/subscriptions',
        element: <Subscriptions/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  }
  
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
