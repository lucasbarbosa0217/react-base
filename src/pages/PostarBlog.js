import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

const PostarBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Recuperando o token do localStorage
      axios.defaults.withCredentials = true;
      const token = getCookie('_csrf');

      const response = await axios.post('/api/postBlog', {
        title,
        content
      }, {
        headers: {
          'X-XSRF-TOKEN': token
        }
      });

      if (response.status === 201) {
        console.log('Blog postado com sucesso!');
        // Atualizar a lista de blogs ou fazer outras ações necessárias após o post do blog
      }
    } catch (error) {
      console.error('Erro ao postar o blog:', error);
      setError(error.response || error || "Erro ao postar Blog");
    }
  };

  return (
    <div className='page'>
      <h2>Postar Blog</h2>
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
          <ReactQuill 
            value={content} 
            onChange={setContent} 
          />
        </div>
        <button type="submit">Postar</button>
      </form>
    </div>
  );
};

export default PostarBlog;
