import React, { useState } from 'react';
import axios from 'axios';
import Title from '../components/title/title';
import "../components/container/container.css"

import "./Registration.css"
import Button from '../components/button/button';
import { ReactComponent as MySvg } from '../svg/2.svg';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true

      const response = await axios.post('/api/register', {
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
    <div className='containerDivided page'>
    <div className='containerDividedFirst orderChange registration'>
    <Title className="title">Cadastrar</Title>
    
    <form onSubmit={handleSubmit}>
      <div className='inputgroup'>
        <label htmlFor="username">Nome de usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='inputgroup'>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
    </div>
    <div className='containerDividedSecond image'>
    <MySvg className='svg'/>

    </div>
    
  </div>
  );
};

export default Registro;
