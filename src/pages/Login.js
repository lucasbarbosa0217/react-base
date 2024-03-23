import React, { useState } from 'react';
import axios from 'axios';
import Title from '../components/title/title';
import "../components/container/container.css"

import "./Login.css"
import Button from '../components/button/button';
import { ReactComponent as MySvg } from '../svg/1.svg';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        axios.defaults.withCredentials = true

      const response = await axios.post('/api/login', {
        username,
        password
      });


     
    } catch (error) {
        console.log(error)
      setError(error.response.data.msg || error || "Erro login.");
    }
  };

  return (
    <div className='containerDivided page'>
      <div className='containerDividedFirst orderChange login'>
      <Title className="title">Login</Title>
      
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
        <Button>Entrar</Button>
      </form>
      </div>
      <div className='containerDividedSecond image'>
      <MySvg className='svg'/>

      </div>
      
    </div>
    
  );
};

export default Login;
