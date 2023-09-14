import "./telalogin.css";
const TelaLogin = () => {
    return (
      <>
      <div class="login-container">
        <div class="login-form">
            <h2>Faça Login</h2>
            <div class="form-group">
                <label for="username">Usuário:</label>
                <input type="text" id="username" name="username" placeholder="Nome de Usuário"/>
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Senha"/>
            </div>
            <button type="submit">Entrar</button>
        </div>
    </div>

    </>
    );
  }
 
  
  export default TelaLogin; 