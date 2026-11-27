
import { Outlet } from "react-router-dom";

import useAuth from "../../features/auth/hooks/useAuth";

import Header from "./Header";

import AdminSidebar from "./AdminSidebar.jsx";
import ManagerSidebar from "./GestionnaireSidebar";
import ClientSidebar from "./UtilisateurSidebar.jsx";

function MainLayout() {
  const { user } = useAuth();

  function renderSidebar() {
    switch (user?.role) {
      case "Admin":
        return <AdminSidebar />;

      case "Gestionnaire":
        return <ManagerSidebar />;

      case "Utilisateur":
        return <ClientSidebar />;

      default:
        return null;
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {renderSidebar()}

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
