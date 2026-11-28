import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm(){
    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {handleLogin , isLoading, error}=useAuth();

    async function handleSubmit(e){
       
        e.preventDefault();
        const credentials={email:email , password:password} 
        
        try{
            const data = await handleLogin(credentials);

            if(data.user.role === "Admin"){
                navigate("/admin/dashboard",{replace:true})
            }else if(data.user.role === "Gestionnaire"){
                navigate("/manager/dashboard",{replace:true})
            }else if(data.user.role === "Utilisateur"){
                navigate("/client/dashboard",{replace:true})
            }
            

        }catch(error){
            console.log("");
            
        }
    } 
    return(
            
    <>
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">

        <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white text-2xl font-bold">
            T
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
            Tool<span className="text-blue-600">Share</span>
            </h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">

            <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
                Bienvenue !
            </h2>
            <p className="text-slate-500 text-sm mt-2">
                Connectez-vous à votre espace de gestion.
            </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

            {/* Error */}
            {error && (
                <p className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm">
                {error}
                </p>
            )}

            {/* Email */}
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
                >
                Adresse e-mail
                </label>

                <input
                name="email"
                id="email"
                type="email"
                placeholder="exemple@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400"
                />
            </div>

            {/* Password */}
            <div>
                <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700 mb-2"
                >
                Mot de passe
                </label>

                <input
                name="password"
                id="password"
                type="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3 rounded-lg shadow-md shadow-blue-600/20 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>

            </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6">
            © 2026 ToolShare · Tous droits réservés
        </p>

        </div>
    </div>
    </>

    )
}
export default LoginForm