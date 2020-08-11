import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function Food() {
  return (
    <div>
      <Header pageTitle="Perfil" searchBtn={false} />
      <div className={'userButtons'}>
        <Link to={'/receitas-feitas'}>
          <span>Receitas Feitas</span>
        </Link>
        <Link to={'/receitas-favoritas'}>
          <span>Receitas Favoritas</span>
        </Link>
        <Link to={'/'}>
          <span>Sair</span>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Food;
