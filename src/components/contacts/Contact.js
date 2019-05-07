import React, { Component } from "react";
// to support Typechecking via PropTypes
import PropTypes from "prop-types";
import { Consumer } from "../../contextApi";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // DESTRUCTURING CONST is used to get rid of this.props inside {this.props.name}, {this.props.email}, {this.props.phone}
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {/* write onShow Click as an arrow function to avoid needing to write .bind(this) when you use it
              write !this.state.showContactInfo instead of false to be able to update the state as many tims as you need instead of only once (from true to false) */}
              <h4>
                {name}{" "}
                <i
                  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {/* show the values of contact info when swhoContactInfo is true and nothing when false */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {email}</li>
                  <li className="list-group-item">Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// check if the prop passed in the contact is a string, if not shows an error in the console.
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
