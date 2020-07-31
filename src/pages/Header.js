import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = () => {
  return (
    <header>
      <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
      <h1 data-testid="page-title">"Titulo da página"</h1>
      <img data-testid="search-top-btn" src={searchIcon} alt="search icon" />
    </header>
  );
};

export default Header;
