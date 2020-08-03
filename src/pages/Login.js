import React from 'react';
import useLogin from '../hooks/useLogin';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isDisable,
    /* setIsDisable */
  } = useLogin();

  const sendLocalStorage = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1)); // alterar para os dados
    localStorage.setItem('cocktailsToken', JSON.stringify(1)); // alterar para os dados
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <fieldset>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
          <small>
            Never share your email with anyone else.
          </small>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
          <small>
            Must have 6 characters.
          </small>
        </fieldset>
        <button
          type="submit"
          disabled={isDisable}
          data-testid="login-submit-btn"
          onClick={() => sendLocalStorage()}
        >
          Login
        </button>
      </form>
    </div>
  );
}
