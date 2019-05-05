import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jon Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Mill",
        email: "kMill@gmail.com",
        phone: "555-444-5555"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henryj@gmail.com",
        phone: "333-555-5555"
      }
    ]
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
