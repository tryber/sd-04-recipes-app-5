import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  console.log(props);

  return (
    <header>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
      </Link>
      <h1 data-testid="page-title">{props.pageTitle}</h1>
      {props.searchBtn && (
        <button onClick={() => setDisplaySearchBar(!displaySearchBar)}>
          <img data-testid="search-top-btn" src={searchIcon} alt="search icon" />
        </button>
      )}
      {displaySearchBar && <SearchBar mealsType={props.recipeType} />}
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
  recipeType: 'comidas',
};

export default Header;
