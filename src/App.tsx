import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import debounce from 'lodash.debounce'

import { Container, Section } from './styledComponents'
import Experience from './components/Experience'
import TypewriterTitle from './components/TypewriterTitle'
import IntroSection from './components/IntroSection'
import FooterLinks from './components/FooterLinks'
import Technologies from './components/Technologies'

const App: React.FC = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    const introSection = document.getElementById('introSection')!
    const technolgies = document.getElementById('technologies')!
    const experience = document.getElementById('experience')!

    const handleScroll = debounce(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const intersectionRatios = entries.map(
            (entry) => entry.intersectionRatio
          )
          const currentSection =
            intersectionRatios.indexOf(Math.max(...intersectionRatios)) || 0

          const titles = ['', 'Technologies', 'Experience']
          setTitle(titles[currentSection])
        },
        {
          root: document.querySelector('.container'),
          threshold: 0,
        }
      )
      observer.observe(introSection)
      observer.observe(technolgies)
      observer.observe(experience)
    }, 50)

    const scrollContainer = document.getElementById('scrollContainer')!
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <TypewriterTitle title={title} />
      <Container id="scrollContainer">
        <Section>
          <IntroSection />
        </Section>
        <Section>
          <Technologies />
        </Section>
        <Section>
          <Experience />
        </Section>
        <FooterLinks />
      </Container>
    </>
  )
}

export default App
