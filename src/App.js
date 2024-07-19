import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; import Home from './modules/Home';
import Contact from './modules/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
