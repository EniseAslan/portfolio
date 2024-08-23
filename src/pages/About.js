import React from "react";
import flower from "../img/flower.png";

function About() {
  return (
    <div className="main">
      <div className="aboutcard">
        <p className="text">
          Hi Everyone! I'm from Kırklareli, Turkey
          <br />
          I'm currently studying on frontend developing.
          <br />
          I'm majoring on computer engineering on Bozok university.
          <br />
          <br />
          Some other things that I enjoy to do!
          <span className="animation">
            ~ playing games <br />~ reading books
            <br/>~ designing characters
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
