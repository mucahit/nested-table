import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <h1>User List</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
