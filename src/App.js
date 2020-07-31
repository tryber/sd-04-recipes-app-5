import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import {
  Login,
  Profile,
  Drink,
  Food,
  Explore,
  ExploreDrink,
  ExploreDrinkExploreDrinkByIngredients,
  ExploreFood,
  ExploreFoodByArea,
  ExploreFoodByIngredients,
} from './pages';

function App() {
  return (
    <div id="meals">
      <span>App de receitas</span>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route
              path="/bebidas/:id/in-progress"
              component={'Tela receita de bebida em progres'}
            />
            <Route
              path="/comidas/:id/in-progress"
              component={'Tela receita de comida em progres'}
            />
            <Route path="/bebidas/:id" component={'Tela detalhesBebidas'} />
            <Route path="/comidas/:id" component={'Tela detalhesComida'} />
            <Route
              path="/explorar/comidas/area"
              component={ExploreFoodByArea}
            />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ExploreDrinkExploreDrinkByIngredients}
            />
            <Route
              path="/explorar/comidas/ingredientes"
              component={ExploreFoodByIngredients}
            />
            <Route path="/explorar/bebidas" component={ExploreDrink} />
            <Route path="/explorar/comidas" component={ExploreFood} />
            <Route
              path="/receitas-favoritas"
              component={'receitas-favoritas'}
            />
            <Route path="/receitas-feitas" component={'Tela receitas feitas'} />
            <Route path="/perfil" component={Profile} />
            <Route path="/explorar" component={Explore} />
            <Route path="/bebidas" component={Drink} />
            <Route path="/comidas" component={Food} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
