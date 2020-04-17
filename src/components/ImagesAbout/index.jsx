import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImagesAbout = (props) => {
  const { 
    about1,
    about2,
    about3 
  } = useStaticQuery(graphql`
    query {
      about1: file(relativePath: { eq: "about1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about2: file(relativePath: { eq: "about2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about3: file(relativePath: { eq: "about3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <>
      {(() => {
        switch (props.name) {
          case 'about1':
            return <Img fluid={about1.childImageSharp.fluid} alt="about1"/>
          case 'about2':
            return <Img fluid={about2.childImageSharp.fluid} alt="about2"/>
          case 'about3':
            return <Img fluid={about3.childImageSharp.fluid} alt="about3"/>
          default:
            return null;
        }
      })()}
    </>
  )
}

export default ImagesAbout