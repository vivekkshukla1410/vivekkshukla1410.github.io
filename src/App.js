import React, { Component } from "react";
import Parallax from "./components/Parallax";
import Header from "./components/Header";
import About from "./components/About";
import Employment from "./components/Employment";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import "@fortawesome/fontawesome-free/css/all.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax resumeData={resumeData} />
        <Header />
        <About resumeData={resumeData} className="bg1" />
        <hr />
        <Employment resumeData={resumeData} className="bg2" />
        <hr />
        <Education resumeData={resumeData} />
        <hr />
        <Projects resumeData={resumeData} />
        <hr />
        <Skills resumeData={resumeData} />
        <hr />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
