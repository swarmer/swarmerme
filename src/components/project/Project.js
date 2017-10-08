import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Project.css';


class Project extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagList: PropTypes.string.isRequired,
    link: PropTypes.string,
    github: PropTypes.string,
  }

  render() {
    const { title, description, tagList, link, github } = this.props;

    var tags = tagList.split(',');

    return (
      <section className="project panel panel-default">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">
          {description}

          <p className="tag-list">
            {
              tags.map((tag) =>
                <span className="tag label label-default" key={tag}>
                  <span className="fa fa-tag"></span>
                  {tag}
                </span>
              )
            }
          </p>
        </div>

        { link !== undefined &&
          <p>
            <span className="fa fa-external-link"></span>
            <a href={"http://" + link + "/"}>
              {link}
            </a>
          </p>
        }

        { github !== undefined &&
          <p>
            <span className="fa fa-github"></span>
            <a href={"https://github.com/" + github}>{github}</a>
          </p>
        }

      </section>
    );
  }
}


export default Project;
