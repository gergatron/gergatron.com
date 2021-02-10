import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
// import styled from 'styled-components'

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        alt="mug face"
        fluid={data.placeholderImage.childImageSharp.fluid}
        // fadeIn={false}
        // loading="eager"
      />
    </>
  )
}
