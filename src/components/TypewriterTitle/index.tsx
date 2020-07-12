import React from 'react'

import { Header } from './styledComponents'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Scrambler = require('react-text-scrambler')

type Props = {
  title: string
}

const TypewriterTitle: React.FC<Props> = ({ title }) => (
  <Header>
    <Scrambler.Scrambler renderIn={1750} text={title} />
  </Header>
)

export default TypewriterTitle
