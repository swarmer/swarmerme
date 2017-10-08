import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProjectSection.css';


class ProjectSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,

    children: PropTypes.node,
  }

  render() {
    const { title, children } = this.props;

    return (
      <section className="main-section">
        <h2 className="text-center">{title}</h2>

        <div className="project-container">
          {children}
        </div>
      </section>
    );
  }
}


export default ProjectSection;
