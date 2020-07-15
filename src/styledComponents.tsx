import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  @media (min-width: 767px) {
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }
  background: #212021;
`

type SectionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any
}

export const Section = styled.section<SectionProps>`
  min-height: 100vh;
  position: relative;
  scroll-snap-align: start;
  display: flex;
  padding: 4rem 2rem;
  background: ${({ theme }: SectionProps) => theme.colors.light};
  color: ${({ theme }: SectionProps) => theme.colors.dark};
  &:nth-child(2n + 1) {
    background: ${({ theme }: SectionProps) => theme.colors.dark};
    color: ${({ theme }: SectionProps) => theme.colors.light};
  }
`
