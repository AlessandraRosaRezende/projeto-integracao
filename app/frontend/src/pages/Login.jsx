import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../services/requests';
import '../styles/pages/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const user = await requestLogin('/login', { email, password });

      setToken(user.token);

      const { role, userId } = await requestData('/login/role', { email, password });

      localStorage.setItem('token', user.token);
      localStorage.setItem('role', role);
      localStorage.setItem('id', userId);
      JSON.stringify(localStorage.setItem('user', userId), null, 2);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/users" />;

  return (
    <>
      <section className="user-login-area">
        <form>
          <h1>Área do usuário</h1>
          <label htmlFor="email-input">
            <input
              className="login__login_input"
              type="text"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="Login"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              placeholder="Senha"
            />
          </label>
          {
            (failedTryLogin)
              ? (
                <p>
                  {
                    `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          }
          <button
            type="submit"
            onClick={(event) => login(event)}
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
