import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { divide } from 'lodash';
// Search somente para teste em um pagina ativa
import SearchBar from '../components/SearchBar';

export function Food() {
  return (
    <div>
      <div class={"userButtons"}>
        <Link to={"/receitas-feitas"}><span>Receitas Feitas</span></Link>
        <Link to={"/receitas-favoritas"}><span>Receitas Favoritas</span></Link>
        <Link to={"/"}><span>Sair</span></Link>
      </div>
      {/* Search somente para teste em um pagina ativa */}
      <div>{ < SearchBar /> }</div> 
      {/* Search somente para teste em um pagina ativa */}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Food;
