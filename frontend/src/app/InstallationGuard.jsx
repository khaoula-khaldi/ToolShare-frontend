import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useInstallation from "../features/installation/hooks/useInstallation";

function InstallationGuard() {
  const {
    installed,
    isLoading,
    error,
    checkInstallation,
  } = useInstallation();

  const location = useLocation();

  useEffect(() => {
    checkInstallation();
  }, []);

  if (isLoading || (installed === null && !error)) {
    return <p>Vérification de l'installation...</p>;
  }

  if (error && installed === null) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={checkInstallation}>
          Réessayer
        </button>
      </div>
    );
  }

  if (installed === false && location.pathname !== "/installation") {
    return <Navigate to="/installation" replace />;
  }

  if (installed === true && location.pathname === "/installation") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default InstallationGuard;