import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 4rem;
  padding-left: 2rem;
`;

export const Link = styled.a`
  margin-right: 3rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.font.medium};
`;
