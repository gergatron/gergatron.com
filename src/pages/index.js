import React, { useRef } from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import SEO from 'react-seo-component'
import { ogImageUrl } from '../util/build-og-image-url'
import { MugFace } from '../components/mug-face'
import { NavItems } from '../components/nav-items'

// import { BackToTop } from '../components/back-to-top'
// import { useOnScreen } from '../hooks/use-on-screen'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  min-height: 60vh;
  ${down('md')} {
    min-height: 50vh;
  }
  div {
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    height: 100%;
    max-height: 450px;
    width: 100%;
    max-width: 450px;
  }
  nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'about projects'
      'now uses';
    grid-gap: 30px;
  }
`

const LandingPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default () => {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const ref = useRef()
  // const onScreen = useOnScreen(ref)
  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description}
        image={ogImageUrl(
          authorName,
          'gergatron.com',
          `Testing Playground`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <LandingPage>
        <MugFace />
        <section ref={ref}>
          <NavItems />
        </section>
      </LandingPage>
    </>
  )
}
