import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      const response = await axios.post('/api/login', {
        username,
        password
      });

      // Se a resposta for bem-sucedida, o token de autenticação estará no corpo da resposta
      const { token } = response.data;
      
      // Salvar o token em localStorage ou em algum outro local de armazenamento seguro
      localStorage.setItem('token', token);

      // Chamar a função de sucesso de login passada como prop, se for uma função
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess();
      }

    } catch (error) {
      console.error(error);
      setError(error.response.data.msg || 'Erro de login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Login;
