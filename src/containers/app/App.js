import React, { Component } from 'react';

import Header from 'components/header/Header';
import ProjectSection from 'components/project-section/ProjectSection';
import Project from 'components/project/Project';
import Footer from 'components/footer/Footer';


class App extends Component {
  render() {
    const currentYear = (new Date()).getFullYear();

    return (
      <div className="App">
        <Header title="swarmer.me">
          <p>
            Hello, I'm Anton Barkovsky.
          </p>
          <p>
            Check out some of my projects.
          </p>
        </Header>

        <ProjectSection title="Web Frontend" iconId="fas fa-laptop-code">
          <Project
            title="swarmerme"
            description="This website"
            tagList="HTML, CSS, JavaScript, React"
            github="swarmer/swarmerme"
          />
        </ProjectSection>

        <ProjectSection title="Machine Learning" iconId="fas fa-robot">
          <Project
            title="hero2vec"
            description="Learning (word2vec style) dota2 hero embeddings from matches"
            tagList="pytorch"
            github="swarmer/hero2vec"
          />
          <Project
            title="liveness"
            description="Plant health analysis using neural networks"
            tagList="keras, tensorflow, numpy, Python"
            github="swarmer/liveness"
          />
          <Project
            title="manualnet"
            description="A manual implementation of a simple neural network"
            tagList="numpy, Python"
            github="swarmer/manualnet"
          />
        </ProjectSection>

        <ProjectSection title="Python Utilities" iconId="fab fa-python">
          <Project
            title="cfglib"
            description="An extensible configuration management library"
            tagList="Python"
            github="swarmer/cfglib"
          />
          <Project
            title="depchecker"
            description="A tool that checks python project dependencies"
            tagList="Python, setuptools"
            github="swarmer/depchecker"
          />
          <Project
            title="nlist"
            description="A Python library providing a lightweight multidimensional list"
            tagList="Python, pytest, sphinx, pypi"
            github="swarmer/nlist"
          />
        </ProjectSection>

        <ProjectSection title="Systems Programming" iconId="fas fa-cogs">
          <Project
            title="mig"
            description="A transport network protocol"
            tagList="Rust, Networking"
            github="swarmer/mig"
          />
          <Project
            title="watcherd"
            description="A minimal process supervisor"
            tagList="Rust, Linux"
            github="swarmer/watcherd"
          />
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
        </ProjectSection>

        <ProjectSection title="Other">
          <Project
            title="compendium"
            description="My personal knowledge base"
            tagList="Markdown"
            link="compendium.swarmer.me"
            github="swarmer/compendium"
          />
          <Project
            title="threedy"
            description="A 3D graphics demo implemented manually on top of 2D primitives"
            tagList="Rust"
            github="swarmer/threedy"
          />
          <Project
            title="algorithms"
            description="Some common algorithms and data structures that I've implemented as a reference"
            tagList="C++, Algorithms, Data structures"
            github="swarmer/algorithms"
          />
        </ProjectSection>

        <Footer
          copyright={`© ${currentYear} Anton Barkovsky`}

          email="anton@swarmer.me"
          github="swarmer"
        />
      </div>
    );
  }
}


export default App;
