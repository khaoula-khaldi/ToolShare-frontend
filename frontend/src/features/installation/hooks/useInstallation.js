import { useState } from "react";

import installationService from "../services/installation.service.js";
function useInstallation(){

    const [installed,setInstalled]=useState(null);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(false);

        async function checkInstallation(){
            try{
                setIsLoading(true);
                setError(null);
                
                const response = await installationService.checkInstallation();
                setInstalled(response.installed);
                return response

            }catch(error){
                setError(error.response?.data?.message || "erreur lors de verfification de l'installation");
            }finally{
                setIsLoading(false);
            }        
        }
        
        async function createInstallation(data){
            try{
                setIsLoading(true);
                setError(null);

                const response = await installationService.createInstallation(data);
                setInstalled(true);
                return response;
            }catch(error){
                setError(error.response?.data?.message || "Erreur lors de la creation de l'installation");
            }finally{
                setIsLoading(false);
            }
        }
    return {
        installed,
        isLoading,
        error,
        checkInstallation,
        createInstallation
    }
}
export default useInstallation