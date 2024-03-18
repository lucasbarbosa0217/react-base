// authApi.js
import axios from 'axios';

const verifyToken = async () => {
  try {
    // Recuperar o token do localStorage
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    // Chamar a API para verificar o token
    const response = await axios.get('/api/verifyToken', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // Retornar a resposta da API
    return response.data;
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    throw error;
  }
};

export default verifyToken;
