
import { createBrowserRouter, Navigate } from "react-router-dom";

import InstallationGuard from "./InstallationGuard";

import LoginPage from "../features/auth/pages/LoginPage";
import InstallationPage from "../features/installation/pages/InstallationPage";

import MainLayout from "../components/layout/MainLayout";

import AdminDashboard from "../features/dashboard/pages/DashboardPage";
import ManagerDashboard from "../features/dashboardGestionnaire/pages/DashboardPage";
import ClientDashboard from "../features/dashboardUtilisateur/pages/DashboardPage";

import UsersPage from '../features/user/pages/user';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstallationGuard />,
    children: [
      {
        index: true,
        element: <Navigate to="/installation" replace />,
      },
      {
        path: "installation",
        element: <InstallationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      // Espace Admin
      {
        path: "admin",
        element: <MainLayout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path : "/admin/users",
            element :<UsersPage/>,
          }
        ],
      },

      // Espace Gestionnaire
      {
        path: "manager",
        element: <MainLayout />,
        children: [
          {
            path: "dashboard",
            element: <ManagerDashboard />,
          },
        ],
      },

      // Espace Client
      {
        path: "client",
        element: <MainLayout />,
        children: [
          {
            path: "dashboard",
            element: <ClientDashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
