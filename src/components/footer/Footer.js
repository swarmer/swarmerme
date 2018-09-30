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
              <span className="fab fa-skype">&nbsp;</span>
              <a href={"skype:" + skype + "?chat"}>{skype}</a>
            </li>
          }
          { email !== undefined &&
            <li className="contact-item">
              <span className="fas fa-envelope">&nbsp;</span>
              <a href={"mailto:" + email}>{email}</a>
            </li>
          }
          { github !== undefined &&
            <li className="contact-item">
              <span className="fab fa-github">&nbsp;</span>
              <a href={"https://github.com/" + github}>{github}</a>
            </li>
          }
        </ul>
      </footer>
    );
  }
}


export default Footer;
