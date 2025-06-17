import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Stocks from "./components/Stocks/Stocks";
import Mutuals from "./components/Mutuals/Mutuals";
import News from "./components/News/News";

const routes = createRoutesFromElements(
  <Route path="/dashboard.html" element={<Layout />} >
    <Route path="" element={<Stocks />} />
    <Route path="mutuals" element={<Mutuals />} />
    <Route path="news" element={<News />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
