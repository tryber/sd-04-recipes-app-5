import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Drink from './pages/Drink';
import Food from './pages/Food';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreDrinkByIngredients from './pages/ExploreDrinkByIngredients';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodByArea from './pages/ExploreFoodByArea';
import ExploreFoodByIngredients from './pages/ExploreFoodByIngredients';
import FavoritesRecipes from './pages/FavoritesRecipes';
import DoneRecipes from './pages/DoneRecipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeProgress from './pages/RecipeProgress';

function App() {
  return (
    <Layout id="meals">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/bebidas/:id/in-progress" component={RecipeProgress} />
            <Route path="/comidas/:id/in-progress" component={RecipeProgress} />
            <Route path="/bebidas/:id" component={RecipeDetails} />
            <Route path="/comidas/:id" component={RecipeDetails} />
            <Route path="/explorar/comidas/area" component={ExploreFoodByArea} />
            <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinkByIngredients} />
            <Route path="/explorar/comidas/ingredientes" component={ExploreFoodByIngredients} />
            <Route path="/explorar/bebidas" component={ExploreDrink} />
            <Route path="/explorar/comidas" component={ExploreFood} />
            <Route path="/receitas-favoritas" component={FavoritesRecipes} />
            <Route path="/receitas-feitas" component={DoneRecipes} />
            <Route path="/perfil" component={Profile} />
            <Route path="/explorar" component={Explore} />
            <Route path="/bebidas" component={Drink} />
            <Route path="/comidas" component={Food} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Layout>
  );
}

export default App;
