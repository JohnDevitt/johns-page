import React from "react";
import { Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { Container, StyledCol, Image, StyledCard } from "./styledComponents";
import aol from "./aol.png";
import zynstra from "./zynstra.png";
import prodigyai from "./prodigyai.png";
import bcgdv from "./bcgdv.png";

const Experience: React.FC = () => {
  const workExperience = [
    {
      employer: "Aol",
      location: "Dublin, Ireland",
      image: aol,
    },
    {
      employer: "Zynstra",
      location: "Bristol, UK",
      image: zynstra,
    },
    {
      employer: "Euro One",
      location: "Berlin, Germany",
      image: prodigyai,
    },
    {
      employer: "BCG Digital Ventures",
      location: "Berlin, Germany",
      image: bcgdv,
    },
  ];

  return (
    <Container id="experience">
      <Row gutter={[64, 64]} justify="start">
        {workExperience.map((job) => (
          <StyledCol xs={24} md={24} lg={12} xl={6}>
            <StyledCard
              hoverable
              headStyle={{
                flex: 1,
              }}
              cover={<Image alt={job.employer} src={job.image} />}
            >
              <Meta title={job.employer} description={job.location} />
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
