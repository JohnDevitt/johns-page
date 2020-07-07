import styled from "styled-components";

export const Container = styled.div`
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.font.headline};
  text-align: center;
`;
