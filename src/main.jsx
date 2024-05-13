import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import BlogMain from './blog-main'
import SprintThree from './sprint-3'
import SprintFour from './sprint-4'
import SprintFive from './sprint-5'
import SprintSix from './sprint-6'

const site = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog-main',
    element: <BlogMain />
  },
  {
    path: '/sprint-3',
    element: <SprintThree />
  },
  {
    path: '/sprint-4',
    element: <SprintFour />
  },
  {
    path: '/sprint-5',
    element: <SprintFive />
  },
  {
    path: '/sprint-6',
    element: <SprintSix />
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
