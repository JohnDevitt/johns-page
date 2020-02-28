import React, { useState, useEffect } from "react";
import "./App.css";
const Typewriter = require("typewriter-effect");
const Scrambler = require("react-text-scrambler");

function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        console.log(entries);
        const currentSection = entries.findIndex(
          entry => entry.intersectionRatio > 0.5
        );
        const titles = ["", "Technologies", "Experience", "Projects"];
        setTitle(titles[currentSection]);
      },
      {
        root: document.querySelector(".container"),
        threshold: 0.34
      }
    );

    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  return (
    <div className="container">
      <header>
        <Scrambler.Scrambler text={title} renderIn={1750} />
      </header>

      <section className="sectionOne">
        <Typewriter
          onInit={(typewriter: any) => {
            typewriter
              .typeString("Hi, I'm John")
              .pauseFor(2500)
              .deleteAll(35)
              .start()
              .typeString("I'm a full stack developer")
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
      </section>

      <section className="sectionTwo">
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Apollo Client</li>
          <li>Kotlin</li>
          <li>Spring</li>
          <li>Terraform</li>
        </ul>
      </section>

      <section className="sectionThree">
        <ul>
          <li>Aol</li>
          <li>Zynstra</li>
          <li>EuroOne</li>
          <li>BCG Digital Ventures</li>
        </ul>
      </section>

      <footer>
        <a href="https://www.linkedin.com/in/john-devitt/">Linkedin</a>
        <a href="https://github.com/JohnDevitt">Github</a>
      </footer>
    </div>
  );
}

export default App;
