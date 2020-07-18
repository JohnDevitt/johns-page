import React from 'react'
import { Row } from 'antd'
import Meta from 'antd/lib/card/Meta'

import { Container, StyledCol, Image, StyledCard } from './styledComponents'
import aol from './aol.svg'
import zynstra from './zynstra.webp'
import prodigyai from './prodigyai.svg'
import bcgdv from './bcgdv.svg'

const Experience: React.FC = () => {
  const workExperience = [
    {
      employer: 'Aol',
      location: 'Dublin, Ireland',
      image: aol,
    },
    {
      employer: 'Zynstra',
      location: 'Bristol, UK',
      image: zynstra,
    },
    {
      employer: 'Euro One',
      location: 'Berlin, Germany',
      image: prodigyai,
    },
    {
      employer: 'BCG Digital Ventures',
      location: 'Berlin, Germany',
      image: bcgdv,
    },
  ]

  return (
    <Container id="experience">
      <Row gutter={[64, 64]} justify="start">
        {workExperience.map((job) => (
          <StyledCol key={job.employer} lg={12} md={24} xl={6} xs={24}>
            <StyledCard
              cover={<Image alt={job.employer} src={job.image} />}
              headStyle={{
                flex: 1,
              }}
              hoverable
            >
              <Meta description={job.location} title={job.employer} />
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
    </Container>
  )
}

export default Experience
