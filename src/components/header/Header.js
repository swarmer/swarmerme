import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';


class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,

    children: PropTypes.node,
  }

  render() {
    const { title, children } = this.props;

    return (
      <header className="jumbotron">
        <div className="container">
          <h1>{title}</h1>
          {children}
        </div>
      </header>
    );
  }
}


export default Header;
