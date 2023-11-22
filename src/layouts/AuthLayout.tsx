import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loading from "../pages/Errors/Loading";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading &&
        ReactDOM.createPortal(
          <Loading />,
          document.getElementById("dialog") as HTMLElement
        )}
      {!loading && <>{children}</>}
    </>
  );
}

export default AuthLayout;
