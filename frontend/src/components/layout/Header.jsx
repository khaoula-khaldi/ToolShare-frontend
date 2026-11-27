
import useAuth from "../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  function handleLogoutClick() {
    handleLogout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Bienvenue sur ToolShare
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            {user?.name}
          </p>
          <p className="text-xs text-gray-500">
            {user?.role}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <button
          onClick={handleLogoutClick}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
        >
          Déconnexion
        </button>
      </div>
    </header>
  );
}

export default Header;
