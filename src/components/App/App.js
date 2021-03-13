import React, { Component } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Currencies from '../Currencies/Currencies';
import Price from '../Price/Price';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          </Link>
          <h1>Bitcoin prices</h1>
          <Link to="/currencies">Currency List</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/"component={Home}/>
            <Route path="/currencies"component={Currencies}/>
            <Route path='/price/:currency'
            render={routerProps=> <Price setPrice={this.setPrice} {...routerProps}
            {...this.state}/>
            }
            />
            <Route path="/currency" render={() => <Redirect to="/currencies" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
