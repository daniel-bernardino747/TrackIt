import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Habits from "./pages/Habits";
import Historic from "./pages/Historic";
import Login from "./pages/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import SignIn from "./pages/SignIn";
import Today from "./pages/Today";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path="/">

      <Route element={<Login />} index />
      <Route element={<SignIn />} path="/cadastro" />

      <Route element={<Habits />} path="/habitos" />
      <Route element={<Today />} path="/hoje" />
      <Route element={<Historic />} path="/historico" />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );