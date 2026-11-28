
import { useState } from "react";
import { createUser } from "../services/user.service";

function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(data) {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const response = await createUser(data);

      setSuccess(true);

      return response;
    } catch (err) {
      setError(
        err.response?.data?.message || "Erreur de création"
      );

      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleSubmit,
    isLoading,
    error,
    success,
  };
}

export default useCreateUser;
