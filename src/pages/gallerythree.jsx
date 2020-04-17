import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GalleryThree = () => {
  const { gallerythree } = useStaticQuery(graphql`
    query {
      gallerythree: allFile(
        filter: {
          extension: { eq: "jpg" }
          absolutePath: { regex: "/projetosImagens/institucional/" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Institucional" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Institucional</h2>
            <hr className="featurette-divider"></hr>
          </div>
        </div>
        <div className="row">
          {gallerythree.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Img
                key={image.id}
                fluid={image.childImageSharp.fluid}
                alt="Institucional"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryThree
