import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main>
      <h1>Hello World</h1>
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
