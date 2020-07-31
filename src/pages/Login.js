import React, { useContext } from 'react';
import AppReceitaContext from '../context/AppReceitaContext'
import Footer from '../components/Footer';

function LoginPage() {
  const { data } = useContext(AppReceitaContext);

  return (
    <div>
      <Footer />
      {/* {data.map((element) => <p>{element.strMeal}</p>)} */}
    </div>
  )
}

export default LoginPage;
