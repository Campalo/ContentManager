import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state; //using DESTRUCTURING
    return (
      // use React.Fragment to delete the global div wrppping Contacts because we don't need it
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
