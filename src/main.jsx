import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Education from "./components/pages/Education";
import Awards from "./components/pages/Awards";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
//import Resume from "./components/pages/Resume";

const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          children: [
               {
                    index: true,
                    element: <About />,
               },
               {
                    path: '/Experience',
                    element: <Experience />,
               },
               {
                    path: '/Projects',
                    element: <Projects />,
               },
               {
                    path: '/Education',
                    element: <Education />,
               },
               {
                    path: '/Skills',
                    element: <Skills />,
               },
               {
                    path: '/Awards',
                    element: <Awards />,
               },
               {
                    path: '/Contact',
                    element: <Contact />,
               },
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);
