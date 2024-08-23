import React from "react";
import girl from "../img/girl.jpg";

function Home() {
  return (
    <div className="main">
      <div className="container-body">
        <div className="home-image">
          <img className="image" src={girl} alt="girlimg" />
        </div>

        <div className="home-content">
          <div className="text">
            <h1>Hi There!</h1>
            <h3> I'm Enise Aslan</h3>
            <div className="animation">
              <p>
                This is a<br /> portfolio project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
