import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true

      const response = await axios.post('http://localhost:3330/api/register', {
        username,
        password
      });
      console.log('Usuário registrado com sucesso:', response.data);
      // Redirecionar ou exibir mensagem de sucesso após o registro
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      setError(error.response.data.msg || 'Erro ao registrar usuário');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
