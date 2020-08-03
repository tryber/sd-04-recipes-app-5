import { useEffect, useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext';

export default function useLogin() {
  const context = useContext(AppReceitaContext);

  const {
    email,
    setEmail,
    password,
    setPassword,
    isDisable,
    setIsDisable,
    isLogged,
    setIsLogged
  } = context;

  const validationFields = (email, password) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{7,}$/;
    if (regexEmail.test(email) && regexPassword.test(password)) setIsDisable(false);
    else setIsDisable(true);
  };

  useEffect(() => {
    validationFields(email, password);
  }, [email, password]);

  if (!context) throw new Error('useLogin must be used within a Provider');

  return {
    email,
    setEmail,
    password,
    setPassword,
    isDisable,
    setIsDisable,
    isLogged,
    setIsLogged
  };
}