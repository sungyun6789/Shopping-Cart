import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ItemCart from './pages/ItemCart';
import ItemList from './pages/ItemList';
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/products" component={ItemList} />
        <Route exact path="/cart" component={ItemCart} />
      </Switch>
    </>
  );
};
export default App;
