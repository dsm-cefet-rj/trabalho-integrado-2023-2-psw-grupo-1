import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./telalogin.css"

const TelaLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'jose' && password === '1234') {
      navigate('/cardapio');
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  }

  return (
    <body>
    <body>
      <div className="div">
      <h1 className="header-login">Faça Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username" className="label">Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <label htmlFor="password" className="label">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">Entrar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </body>
    </body>
  );
}

export default TelaLogin;
