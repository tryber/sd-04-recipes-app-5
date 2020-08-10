import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

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
      {displaySearchBar && <SearchBar />}
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  searchBtn: PropTypes.bool,
};

Header.defaultProps = {
  pageTitle: 'App de receitas',
  searchBtn: true,
};

export default Header;
