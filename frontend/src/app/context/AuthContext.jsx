
import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
const [user, setUser] = useState(() => {
const savedUser = sessionStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
});
  const [token, setToken] = useState(() => sessionStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = Boolean(token);

  const value = {
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
