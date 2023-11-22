import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/Auth/Signup";
import Reset from "./pages/Auth/Reset";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout>
                <Signup />
              </AuthLayout>
            }
          />
          <Route
            path="/reset"
            element={
              <AuthLayout>
                <Reset />
              </AuthLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Main>
  </React.StrictMode>
);

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <>{children}</>;
}

export default Main;
