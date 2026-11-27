import api from '../../../services/api';

export const createUser = async (data) => {
    const response = await api.post('/users', data);
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const getUserByEmail = async (email) => {
    const response = await api.get('/users/by-email', {
        params: { email }
    });
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const updateUser = async (id, data) => {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
};

export const deactivateUser = async (id) => {
    const response = await api.patch(`/users/${id}/deactivate`);
    return response.data;
};