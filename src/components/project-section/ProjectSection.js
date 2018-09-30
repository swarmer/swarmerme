import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProjectSection.css';


class ProjectSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    iconId: PropTypes.string,

    children: PropTypes.node,
  };

  static defaultProps = {
    iconId: null,
  };

  render() {
    const { title, children } = this.props;

    return (
      <section className="main-section">
        <h2 className="text-center">
          {this.props.iconId !== null &&
            <span className={this.props.iconId} style={{fontSize: '0.8em'}}>&nbsp;</span>
          }
          {title}
        </h2>

        <div className="project-container">
          {children}
        </div>
      </section>
    );
  }
}


export default ProjectSection;
