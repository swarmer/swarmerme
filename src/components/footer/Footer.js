import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.css';


class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,

    skype: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
  }

  render() {
    const { copyright, skype, email, github } = this.props;

    return (
      <footer>
        <span className="text-muted">{copyright}</span>

        <ul className="contact-list">
          { skype !== undefined &&
            <li className="contact-item">
              <span className="fa fa-skype"></span>
              <a href={"skype:" + skype + "?chat"}>{skype}</a>
            </li>
          }
          { email !== undefined &&
            <li className="contact-item">
              <span className="fa fa-envelope"></span>
              <a href={"mailto:" + email}>{email}</a>
            </li>
          }
          { github !== undefined &&
            <li className="contact-item">
              <span className="fa fa-github"></span>
              <a href={"https://github.com/" + github}>{github}</a>
            </li>
          }
        </ul>
      </footer>
    );
  }
}


export default Footer;
