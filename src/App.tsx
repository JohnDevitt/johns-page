import React, { useState } from "react";
import "./App.css";
const Typewriter = require("typewriter-effect");

function App() {
  return (
    <div className="container">
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter: any) => {
            typewriter
              .typeString("Hi, I'm John")
              .pauseFor(2500)
              .deleteAll(35)
              .start()
              .typeString("I am a full stack developer")
              .pauseFor(2500)
              .deleteAll(35)
              .start()
              .typeString("Welcome to my page")
              .pauseFor(2500);
          }}
          options={{
            cursor: "_",
            autoStart: true,
            loop: false
          }}
        />
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/john-devitt/">Linkedin</a>
        <a href="https://github.com/JohnDevitt">Github</a>
      </div>
    </div>
  );
}

export default App;
