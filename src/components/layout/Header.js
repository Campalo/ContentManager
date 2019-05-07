import React from "react";
// to support Typechecking via PropTypes
import PropTypes from "prop-types";

const Header = props => {
  // DESTRUCTURING CONST is used to get rid of props inside "props.branding"
  const { branding } = props;
  return (
    <div>
      {/* Boostrap navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// default info to be displayed if there is no props passed in
Header.defaultProps = {
  branding: "My App"
};

// check if the prop passed in the header is a string, if not shows an error in the console.
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
