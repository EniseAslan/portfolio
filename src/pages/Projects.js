import React from "react";
import addminusapp from "../img/addminusapp.PNG";
import pomodoro from "../img/pomodoro.PNG";
import todolist from "../img/todolist.PNG";
import portfolio from "../img/portfolio.PNG";
function Projects() {
  return (
    <div className="main">
      <div className="projects-container">
        <a href="https://github.com/EniseAslan/add-minus-app" target="_blank">
          <div class="project-item" title="addminusapp" id="content1">
            <img src={addminusapp}></img>
          </div>{" "}
        </a>
        <a href="https://github.com/EniseAslan/pomodoro-time" target="_blank">
          <div class="project-item" title="pomodoro" id="content2">
            <img src={pomodoro}></img>
          </div>{" "}
        </a>
        <a href="https://github.com/EniseAslan/todo_list" target="_blank">
          <div class="project-item" title="todolist" id="content3">
            <img src={todolist}></img>
          </div>
        </a>
        <a href="https://github.com/EniseAslan/portfolio" target="_blank">
          <div class="project-item" title="portfolio" id="content4">
            <img src={portfolio}></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
