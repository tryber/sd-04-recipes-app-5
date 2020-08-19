import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const { recipeType, pageTitle, searchBtn } = props;

  return (
    <header>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={profileIcon}
          alt="profile icon"
        />
      </Link>
      {console.log(recipeType)}
      <h1 data-testid="page-title">
        {recipeType === 'Comidas' || recipeType === 'Bebidas'
          ? recipeType
          : pageTitle}
      </h1>
      {searchBtn && (
        <button onClick={() => setDisplaySearchBar(!displaySearchBar)}>
          <img
            data-testid="search-top-btn"
            src={searchIcon}
            alt="search icon"
          />
        </button>
      )}
      {displaySearchBar && <SearchBar mealsType={recipeType} />}
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  searchBtn: PropTypes.bool,
  recipeType: PropTypes.string,
};

Header.defaultProps = {
  pageTitle: 'App de receitas',
  searchBtn: true,
  recipeType: 'title',
};

export default Header;
