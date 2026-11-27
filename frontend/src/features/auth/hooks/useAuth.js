
import { useContext } from "react";
import { login } from "../services/auth.service";
import AuthContext from "../../../app/context/AuthContext";

function useAuth() {
  
  const {
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(AuthContext);


  async function handleLogin(credentials) {
    try {
      setIsLoading(true);
      setError(null);

      const data = await login(credentials);

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);

      return data;

    } catch (error) {
      setError(
        error.response?.data?.message || "Erreur de connexion"
      );

      throw error;

    } finally {
      setIsLoading(false);
    }
  }

  
  function handleLogout() {
    setToken(null);
    setUser(null);
    setError(null);

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  }

  return {
    user,token,isAuthenticated,isLoading,error,
    handleLogin,handleLogout,
  };
}

export default useAuth;
