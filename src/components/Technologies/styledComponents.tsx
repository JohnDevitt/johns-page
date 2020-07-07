import { Col } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  font-size: ${({ theme }) => theme.font.large};
  flex: 1 0 100%;
`;

export const TechHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.medium};
  color: grey;
  line-height: 4rem;
  font-weight: 300;
`;

export const Image = styled.img`
  object-fit: scale-down;
  height: 5rem;
`;

export const Title = styled.h5`
  font-size: ${({ theme }) => theme.font.medium};
`;

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 12rem;
`;
