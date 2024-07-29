import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Leaderboard from "./components/Leaderboard.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
  },
],
{basename: import.meta.env.BASE_URL})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router}/>
      </ClerkProvider>
    </React.StrictMode>
);
