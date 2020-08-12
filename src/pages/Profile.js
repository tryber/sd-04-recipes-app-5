import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function Food() {
  const user = JSON.parse(localStorage.user);
  return (
    <div>
      <Header pageTitle="Perfil" searchBtn={false} />
      <p data-testid="profile-email">{user.email}</p>
      <div className={'userButtons'}>
        <Link to={'/receitas-feitas'}>
          <span data-testid="profile-done-btn">Receitas Feitas</span>
        </Link>
        <Link to={'/receitas-favoritas'}>
          <span data-testid="profile-favorite-btn">Receitas Favoritas</span>
        </Link>
        <Link to={'/'}>
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={() => window.localStorage.clear()}
          >
            Sair
          </button>
        </Link>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Food;
