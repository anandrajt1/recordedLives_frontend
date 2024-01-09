import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import AboutPage from './routes/AboutPage';
import SignUpPage from './routes/SignUpPage';
import LoginPage from './routes/LoginPage';
import IndexPage from './routes/IndexPage';
import BatchPage ,{loader as batchPageLoader} from './routes/BatchPage';
import HomePage ,{ loader as homePageLoader } from './routes/HomePage';
import AddSession from './routes/AddSession';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<IndexPage/>

      },
      {
        path:"/batches",
        element:<HomePage/>,
        loader: homePageLoader

      },
      {
        path:"/about",
        element: <AboutPage/>
      },
      {
        path:"/batches/:batchId",
        element:<BatchPage/>,
        loader:batchPageLoader
      },
      {
        path:'/signup',
        element:<SignUpPage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/add-session',
        element:<AddSession/>
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
