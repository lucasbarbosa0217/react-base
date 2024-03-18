import React, { useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Recuperando o token do localStorage
      const token = localStorage.getItem('token');
      axios.defaults.withCredentials = true

      const response = await axios.post('http://localhost:3330/api/postBlog', {
        title,
        content
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Enviando o token JWT no cabeçalho de autorização
        }
      });

      if (response.status === 201) {
        console.log('Blog postado com sucesso!');
        // Atualizar a lista de blogs ou fazer outras ações necessárias após o post do blog
      }
    } catch (error) {
      console.error('Erro ao postar o blog:', error);
      setError(error.response|| 'Erro ao postar o blog');
    }
  };

  return (
    <div>
      <h2>Postar Blog</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Postar</button>
      </form>
    </div>
  );
};

export default Blog;
