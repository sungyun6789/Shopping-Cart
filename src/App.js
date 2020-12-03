import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import ItemCart from "./pages/ItemCart";
import ItemList from "./pages/ItemList";

const App = () => {
  return (
    <Switch>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/itemlist" component={ItemList} />
      <Route path="itemcart" component={ItemCart} />
    </Switch>
  );
};

export default App;
