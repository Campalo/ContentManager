import React, { Component } from "react";

const Context = React.createContext();

// the reducer is going to evaluate the action type which is DELETE CONTACT
// and then the reducer will filter the id and compare it to the id from the payload
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };

    default:
      return state;
  }
};

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
    ],
    // dispatch is part of our state so that allow us to call the reducer
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
