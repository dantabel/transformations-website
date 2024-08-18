import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Services from './pages/Services.tsx'
import OurTeam from './pages/OurTeam.tsx'
import Coaching from './pages/services/Coaching.tsx'
import CoachTraining from './pages/services/CoachTraining.tsx'
import ServicesIndex from './pages/services/ServicesIndex.tsx'
import Counselling from './pages/services/Counselling.tsx'
import Consultancy from './pages/services/Consultancy.tsx'
import Contact from './pages/Contact.tsx'

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: '/', //import.meta.env.BASE_URL,
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
        path: 'services',
        element: <Services />,
        children: [
          {
            index: true,
            element: <ServicesIndex />
          },
          {
            path: 'coaching',
            element: <Coaching />
          },
          {
            path: 'coach-training',
            element: <CoachTraining />
          },
          {
            path: 'counselling',
            element: <Counselling />
          },
          {
            path: 'consultancy',
            element: <Consultancy />
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
