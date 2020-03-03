import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import Dogs from "./Dogs/dogs";
import { fetchDogsAction, readimage } from "./actions/simpleAction.js";
import { connect } from "react-redux";
// import {simpleAction} from './actions/simpleAction'

const mapStateToProps = state => {
  return {
    dogs: state.simpleReducer.result
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDogsAction: () => dispatch(fetchDogsAction()),
  readimage: names => dispatch(readimage(names))
});

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Nanu", age: 25 },
      { name: "Ok", age: 24 }
    ],
    otherState: "some value",
    showPerson: false
  };

  componentDidMount() {
    this.props.fetchDogsAction();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dogs === undefined && this.props.dogs) {
      const names = Object.keys(this.props.dogs.message);
      console.log("11111111111111", names);

      this.props.readimage(names);
    }
  }

  switchNameHandler = event => {
    // console.log(this.state);
    this.setState({
      persons: [
        { name: "Maximilian", age: 30 },
        { name: "Nanu", age: 28 },
        { name: event.target.value, age: 28 }
      ]
    });
  };

  clickHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 30 },
        { name: "Nanu", age: 28 },
        { name: "daniel zeng", age: 28 }
      ]
    });
  };

  // togglePersonsHandler = () => {

  // }

  // simpleAction = event => {};

  render() {
    console.log(this.props.dogs);

    return (
      <div className="App">
        <div>
          <button onClick={this.clickHandler}>swith name</button>
          {/* <button onClick={this.simpleAction}>Test redux action</button> */}
          <Dogs
            click={this.clickHandler}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.switchNameHandler}
          />
          <Dogs
            click={this.clickHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // changed={this.switchNameHandler}
          >
            Hello!!
          </Dogs>
          <Dogs
            click={this.clickHandler}
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            // changed={(evnent)=>{this.switchNameHandler(evnent)}}
          >
            Hello!!
          </Dogs>
          {/* <pre>{JSON.stringify(this.props)}</pre> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
