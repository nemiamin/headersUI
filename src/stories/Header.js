import React from "react";
import PropTypes from "prop-types";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header></header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
