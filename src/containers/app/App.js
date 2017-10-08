import React, { Component } from 'react';

import Header from 'components/header/Header';
import ProjectSection from 'components/project-section/ProjectSection';
import Project from 'components/project/Project';
import Footer from 'components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="swarmer.me">
          <p>
            Hello. I'm Anton Barkovsky and I enjoy mastering state of the art tools to build great products.
          </p>
          <p>
            Check out some of my projects.
          </p>
        </Header>

        <ProjectSection title="Web">
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
        </ProjectSection>

        <ProjectSection title="Other">
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
        </ProjectSection>

        <Footer
          copyright="© 2017 Anton Barkovsky"

          skype="swarmer.pm"
          email="anton@swarmer.me"
          github="swarmer"
        />
      </div>
    );
  }
}


export default App;
