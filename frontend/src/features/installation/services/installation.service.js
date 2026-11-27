import api from '../../../services/api.js';
async function createInstallation(data){
    const response = await api.post('/installation',data);
    return response.data
}

async function checkInstallation(){
    const response = await api.get('/installation/status');
    return response.data
}

export default {createInstallation,checkInstallation}