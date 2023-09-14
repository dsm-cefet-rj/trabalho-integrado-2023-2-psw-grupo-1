import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./telalogin.css"

const TelaLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifique se o nome de usuário e senha correspondem aos valores esperados
    if (username === 'jose' && password === '1234') {
      // Se o login for bem-sucedido, redirecione para a página de cardápio
      navigate('/cardapio');
    } else {
      // Se o login falhar, exiba uma mensagem de erro
      setError('Nome de usuário ou senha incorretos');
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Faça Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default TelaLogin;
