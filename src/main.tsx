import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Coaching from './pages/Coaching.tsx'
import OurTeam from './pages/OurTeam.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App hasError={true} />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'about/team',
        element: <OurTeam />
      },
      {
        path: 'coaching',
        element: <Coaching />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
