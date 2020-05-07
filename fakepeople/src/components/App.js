import React, { Component } from "react";
import AddPerson from "./AddPerson";
import PeopleList from "./PeopleList";

class App extends Component {
  render() {
  return (
    <div className="hero is-big notification is-dark is-bold">
      <h1 className="title">FAKE PEOPLE</h1>
      <AddPerson />
      <PeopleList />
    </div>
  );
  }
}

export default App;
