
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white p-5">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          T
        </div>
        <h1 className="text-xl font-bold text-gray-900">ToolShare</h1>
      </div>

      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Administration
      </p>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
           Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Utilisateurs
        </NavLink>

        <NavLink
          to="/admin/stores"
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Magasins
        </NavLink>

        <NavLink
          to="/admin/managers"
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
           Gestionnaires
        </NavLink>

        <NavLink
          to="/admin/reservations"
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Réservations
        </NavLink>

      </nav>

      <div className="mt-auto border-t border-gray-200 pt-5">
        <p className="text-xs text-gray-400">ToolShare © 2026</p>
      </div>

    </aside>
  );
}

export default AdminSidebar;
