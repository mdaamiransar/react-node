import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import SideNav from './components/SideNav';
import ThemeCustomizer from './components/ThemeCustomizer';
import Footer from './components/Footer';
import Product from './pages/Product';
import Category from './pages/Category';
import CategoryContextProvider from './contexts/CategoryContext';
import ProductContextProvider from './contexts/ProductContext';
//import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <SideNav />

        <Switch>

          <Route exact path="/" component={Product} />

          <Route exact path="/c" component={Category} />

        </Switch>



        {/* <!-- END: Page Main--> */}

        {/* <!-- Theme Customizer -->*/}
        <ThemeCustomizer />

        <a
          href="https://themeforest.net/item/materialize-material-design-admin-template/11446068?ref=PIXINVENT"
          className="btn btn-buy-now gradient-45deg-indigo-purple gradient-shadow white-text tooltipped buy-now-animated tada"
          data-position="left"
          data-tooltip="Buy Now!"
        ><i className="material-icons">add_shopping_cart</i></a>

        {/* <!-- BEGIN: Footer-->*/}
        <Footer />

      </React.Fragment>
    </Router>
  );
}

export default App;
