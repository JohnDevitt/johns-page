import React from 'react'

import { Container } from './styledComponents'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Typewriter = require('typewriter-effect')

const IntroSection: React.FC = () => (
  <Container id="introSection">
    <Typewriter
      options={{
        cursor: '_',
        autoStart: true,
        loop: false,
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onInit={(typewriter: any): void => {
        typewriter
          .typeString("Hi, I'm John")
          .pauseFor(2500)
          .deleteAll(35)
          .start()
          .typeString("I'm a full stack developer")
          .pauseFor(2500)
          .deleteAll(35)
          .start()
          .typeString('Welcome to my page')
          .pauseFor(2500)
      }}
    />
  </Container>
)

export default IntroSection
