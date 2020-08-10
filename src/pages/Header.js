import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from '../components/SearchBar';

const Header = () => (
  <header>
    <Link to="/perfil">
      <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
    </Link>
    <h1 data-testid="page-title">Titulo da página</h1>
    <img data-testid="search-top-btn" src={searchIcon} alt="search icon" />
    <div>{ < SearchBar /> }</div>
  </header>
);
export default Header;
