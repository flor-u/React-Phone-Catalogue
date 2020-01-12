import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import PhoneDetail from "./components/PhoneDetail";
import Home from "./components/Home";
import { store } from "./store";
import { setPhoneList } from "./actions";


class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:5000/phones")
    .then(allPhones => {
        console.log(allPhones.data)
        store.dispatch(setPhoneList(allPhones.data))
    });
  }

  render() {
    return(
    <div className='App container-fluid'>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path='/phone/:ID'
          render={(props) => {
            console.log(props)
            let chosenPhone = props.match.params.ID;
            return <PhoneDetail phoneID={chosenPhone}></PhoneDetail>;
          }}
        />
      </Switch>
    </div>
    )
  }
}

export default App;
