import React from "react";
import { Section } from "./styledComponents";

interface Props {
  children: React.ReactElement;
  light?: boolean;
}

const SnapScrollSection: React.FC<Props> = ({ children, light }) => (
  <Section light={light}>{children}</Section>
);

export default SnapScrollSection;
