
import { useState } from "react";

function InstallationForm({ onInstall, isLoading, error }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      await onInstall(formData);
    } catch (error) {
      // L'erreur est déjà gérée dans le hook
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-primary text-white text-2xl font-bold shadow-lg shadow-blue-200">
          T
        </div>

        <h1 className="text-2xl font-bold text-secondary">
          Bienvenue sur ToolShare
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Configurez votre application en créant le compte administrateur.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-2xl p-7 shadow-xl shadow-slate-200/50 space-y-5"
      >
        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Installation initiale
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Remplissez les informations ci-dessous.
          </p>
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-700">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700">
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@gmail.com"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-semibold text-slate-700">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Créer un mot de passe"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {error && (
          <p
            role="alert"
            className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-4 bg-primary text-white font-semibold rounded-xl shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Installation en cours..." : "Créer mon compte administrateur"}
        </button>

        <p className="text-center text-xs text-slate-400">
          Configuration initiale de votre espace ToolShare
        </p>
      </form>
    </div>
  );
}

export default InstallationForm;
