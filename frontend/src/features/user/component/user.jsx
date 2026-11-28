
import useCreateUser from "../hooks/useCreateUser";

function CreateUser() {
  const {handleSubmit,isLoading,error,success,} = useCreateUser();

  async function handleForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    try {
      await handleSubmit(data);
      e.target.reset();
    } catch (err) {
      // L'erreur est déjà gérée dans le hook.
    }
  }

  return (
    <form onSubmit={handleForm} className="space-y-4">

      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
      </div>

      <div>
        <label htmlFor="role">Rôle</label>
        <select id="role" name="role" required>
          <option value="">Choisir un rôle</option>
          <option value="Admin">Admin</option>
          <option value="Gestionnaire">Gestionnaire</option>
          <option value ="Utilisateur">Utilisateur</option>
        </select>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Création..." : "Créer"}
      </button>

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {success && (
        <p className="text-green-600">
          Utilisateur créé avec succès !
        </p>
      )}

    </form>
  );
}

export default CreateUser;
