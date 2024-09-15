import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';  // Import your components
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The Body component contains the header and footer
    children: [
      {
        path: "/",
        element: <Home /> // Default route
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Services",
        element: <Services />
      },
      {
        path: "ContactUs",
        element: <ContactUs />
      },
      {
        path: "Projects",
        element: <Projects />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

