import React, { Component } from 'react';

import Project from '../project/Project'

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
            <Project
              title="swarmerme"
              description="This website"
              tagList="HTML, CSS, JavaScript, React"
              github="swarmer/swarmerme"
            />
            <Project
              title="tester"
              description="A web app that helps in studying"
              tagList="Python, Django, HTML, CSS, JavaScript, jQuery, Gulp"
              link="tester.swarmer.me"
              github="swarmer/tester"
            />
            <Project
              title="blurry"
              description="A Canvas demo"
              tagList="HTML, JavaScript, Canvas, Gulp"
              link="blurry.swarmer.me"
              github="swarmer/blurry"
            />
            <Project
              title="urls"
              description="A personal url shortener"
              tagList="Python, Django"
              link="urls.swarmer.me"
              github="swarmer/urls"
            />
          </div>
        </section>

        <section className="main-section">
          <h2 className="text-center">Other</h2>

          <div className="project-container">
            <Project
              title="syslights"
              description="Arduino-powered system load indicator"
              tagList="C, Arduino"
              github="swarmer/syslights"
            />
            <Project
              title="thedoor"
              description="A toy linux kernel module"
              tagList="C, Linux"
              github="swarmer/thedoor"
            />
            <Project
              title="nlist"
              description="A Python library providing a lightweight multidimensional list"
              tagList="Python, pytest, sphinx, pypi"
              github="swarmer/nlist"
            />
            <Project
              title="algorithms"
              description="Some common algorithms and data structures that I've implemented as a reference"
              tagList="C++, Algorithms, Data structures"
              github="swarmer/algorithms"
            />
            <Project
              title="restnotifier"
              description="A desktop application that reminds user to rest"
              tagList="C++, Qt, CMake"
              github="swarmer/restnotifier"
            />
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
