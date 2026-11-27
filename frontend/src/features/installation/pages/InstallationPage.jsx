import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useInstallation from "../hooks/useInstallation";
import InstallationForm from "../components/InstallationForm";

function InstallationPage() {
  const navigate = useNavigate();
  const {
    installed,
    isLoading,
    error,
    checkInstallation,
    createInstallation,
  } = useInstallation();

  useEffect(() => {
    checkInstallation().catch(() => {});
  }, []);

  if (isLoading && installed === null) {
    return <p>Vérification en cours...</p>;
  }

  if (installed === true) {
    return <Navigate to="/login" replace />;
  }

  return (
    <InstallationForm
      onInstall={createInstallation}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default InstallationPage;