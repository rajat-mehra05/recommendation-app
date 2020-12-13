import React, { useState } from "react";
import "./App.css";
import projectsDB from "./database.js";
import logo1 from "./logo1.png"

export default function App() {
  let projects = Object.keys(projectsDB);
  
  const [ selectProject, setSelectedProject] = useState("HTMLCSS");
  function projectClickHandler(project) {
    setSelectedProject(project);
  }

  return (
    <div className="App">

     <img className="logo" src={logo1} alt="logo" />

      {projects.map(function (project) {
        return (
          <button
            className="btns"
            onClick={() => projectClickHandler(project)}
            key={project}
          >
            {project}
          </button>
        );
      })}

      <ul>
        {projectsDB[selectProject].map(function (p) {
          return (
            <div className="output-div" key={p.name}>
              <section className="outputProject">
                <div className="text-right">
                  <div className="project-text"> Name: {p.name}</div>
                  <div className="level-text"> Level: {p.level}</div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>

      <footer>
        <h2> About {<br></br>} </h2>
        <p> This page is built on React.</p> {<br></br>}
        <h3>Connect to me on: <a href="https://www.linkedin.com/in/rajat-mehra-/"> Linkedin</a> | <a href="https://twitter.com/_rajat_mehra_"> Twitter</a> | <a href="https://github.com/rajat-mehra05"> Github</a>
        </h3>        
      </footer>
    </div>
  );
}

