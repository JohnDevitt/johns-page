import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  text-align: start;
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  font-size: ${({ theme }) => theme.font.large};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  z-index: 1;
`;
