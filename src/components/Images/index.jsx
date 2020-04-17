import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  const { 
    image1,
    image2,
    image3
   
  } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 350) {
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
          case 'image1':
            return <Img fluid={image1.childImageSharp.fluid} alt="image1"/>
          case 'image2':
            return <Img fluid={image2.childImageSharp.fluid} alt="image2"/>
          case 'image3':
            return <Img fluid={image3.childImageSharp.fluid} alt="image3"/>
          default:
            return null;
        }
      })()}
    </>
  )
}

export default Image