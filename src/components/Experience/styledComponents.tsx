import { Col, Card } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-card-cover {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  width: 18rem;
  height: 24rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 12rem;
  @media (max-width: 768px) {
    width: 10rem;
  }
`;
