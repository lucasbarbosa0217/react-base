import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3330/api/login', {
        username,
        password
      });
      // Se a resposta for bem-sucedida, o token de autenticação estará no corpo da resposta
      const { token } = response.data;
      // Salvar o token em localStorage ou em algum outro local de armazenamento seguro
      localStorage.setItem('token', token);
      // Redirecionar para a página de perfil do usuário ou alguma outra página protegida
      
    } catch (error) {
      setError(error.response.data.msg);
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
