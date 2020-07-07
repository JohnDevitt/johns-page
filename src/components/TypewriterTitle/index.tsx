import React from "react";
import { Header } from "./styledComponents";
const Scrambler = require("react-text-scrambler");

interface Props {
  title: string;
}

const TypewriterTitle: React.FC<Props> = ({ title }) => {
  console.log(title);
  return (
    <Header>
      <Scrambler.Scrambler text={title} renderIn={1750} />
    </Header>
  );
};

export default TypewriterTitle;
