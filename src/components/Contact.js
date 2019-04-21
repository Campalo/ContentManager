import React, { Component } from "react";
// to support Typechecking thnaks to PropTypes
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    // DESTRUCTURING CONST is used to get rid of this.props inside {this.props.name}, {this.props.email}, {this.props.phone}
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

// check if the prop passed in the contact is a string, if not shows an error in the console.
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
