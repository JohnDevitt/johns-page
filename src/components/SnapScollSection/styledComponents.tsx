import styled from "styled-components";

type SectionProps = {
  light?: boolean;
};

export const Section = styled.section<SectionProps>`
  min-height: 100vh;
  position: relative;
  background: ${({ light, theme }: any) =>
    light ? theme.colors.light : theme.colors.dark};
  scroll-snap-align: start;
  display: flex;
  padding: 4rem 2rem;
`;
