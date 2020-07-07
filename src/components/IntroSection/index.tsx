import React from "react";
import { Container } from "./styledComponents";
const Typewriter = require("typewriter-effect");

const IntroSection = () => (
  <Container id="introSection">
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
        loop: false,
      }}
    />
  </Container>
);

export default IntroSection;
