import React, { useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext'

function LoginPage() {
  const { data } = useContext(AppReceitaContext);

  return (
    <div>
      {data.map((element) => <p>{element.strMeal}</p>)}
    </div>
  )
}

export default LoginPage;
