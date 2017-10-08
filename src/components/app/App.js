import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron">
          <div className="container">
            <h1>swarmer.me</h1>
            <p>
              Hello. I'm Anton Barkovsky and I enjoy mastering state of the art tools to build great products.
            </p>
            <p>
              Check out some of my projects.
            </p>
          </div>
        </header>

        <section className="main-section">
          <h2 className="text-center">Web</h2>

          <div className="project-container">
            <section className="project panel panel-default">
              <h3 className="project-title">swarmerme</h3>
              <div className="project-description">
                This website

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    HTML
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    CSS
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Gulp
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/swarmerme">swarmer/swarmerme</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">tester</h3>
              <div className="project-description">
                A web app that helps in studying

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Python
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Django
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    HTML
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    CSS
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    JavaScript
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    jQuery
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Gulp
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-external-link"></span>
                <a href="http://tester.swarmer.me/">
                  tester.swarmer.me
                </a>
              </p>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/tester">swarmer/tester</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">blurry</h3>
              <div className="project-description">
                A Canvas demo

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    HTML
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    JavaScript
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Canvas
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Gulp
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-external-link"></span>
                <a href="http://blurry.swarmer.me/">
                  blurry.swarmer.me
                </a>
              </p>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/blurry">swarmer/blurry</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">files</h3>
              <div className="project-description">
                A personal file hosting

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Python
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Django
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/files">swarmer/files</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">urls</h3>
              <div className="project-description">
                A personal url shortener

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Python
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Django
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-external-link"></span>
                <a href="http://urls.swarmer.me/">
                  urls.swarmer.me
                </a>
              </p>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/urls">swarmer/urls</a>
              </p>
            </section>
          </div>
        </section>

        <section className="main-section">
          <h2 className="text-center">Other</h2>

          <div className="project-container">
            <section className="project panel panel-default">
              <h3 className="project-title">syslights</h3>
              <div className="project-description">
                Arduino-powered system load indicator

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    C
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Arduino
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Embedded
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/syslights">swarmer/syslights</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">thedoor</h3>
              <div className="project-description">
                A toy linux kernel module

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    C
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Linux
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/thedoor">swarmer/thedoor</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">nlist</h3>
              <div className="project-description">
                A Python library providing a lightweight multidimensional list

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Python
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    pytest
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    sphinx
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    pypi
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/nlist">swarmer/nlist</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">algorithms</h3>
              <div className="project-description">
                Some common algorithms and data structures that I've implemented as a reference

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    C++
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Algorithms
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Data structures
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/algorithms">swarmer/algorithms</a>
              </p>
            </section>

            <section className="project panel panel-default">
              <h3 className="project-title">restnotifier</h3>
              <div className="project-description">
                A desktop application that reminds user to rest

                <p className="tag-list">
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    C++
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    Qt
                  </span>
                  <span className="tag label label-default">
                    <span className="fa fa-tag"></span>
                    CMake
                  </span>
                </p>
              </div>
              <p>
                <span className="fa fa-github"></span>
                <a href="https://github.com/swarmer/restnotifier">swarmer/restnotifier</a>
              </p>
            </section>
          </div>
        </section>

        <footer>
          <span className="text-muted">© 2015 Anton Barkovsky</span>

          <ul className="contact-list">
            <li className="contact-item">
              <span className="fa fa-skype"></span>
              <a href="skype:swarmer.pm?chat">swarmer.pm</a>
            </li>
            <li className="contact-item">
              <span className="fa fa-envelope"></span>
              <a href="mailto:anton@swarmer.me">anton@swarmer.me</a>
            </li>
            <li className="contact-item">
              <span className="fa fa-github"></span>
              <a href="https://github.com/swarmer">swarmer</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}


export default App;
