import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <div id="meals">
      <Provider>
        <span>App de receitas</span>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
