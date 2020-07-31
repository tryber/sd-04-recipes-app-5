import React, { useContext } from 'react';

import useFoods from '../hooks/useFoods';

import Footer from '../components/Footer';

function Login() {
  const dataFood = useFoods();

  return (
    <div>
      <Footer />
      {dataFood.length > 0 && dataFood.map((element) => <p>{element.meals}</p>)}
    </div>
  );
}

export default Login;
