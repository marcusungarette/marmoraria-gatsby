import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GalleryOne = () => {
  const { galleryone } = useStaticQuery(graphql`
      query {
        galleryone: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/projetosImagens/residencial/"}}) {
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
      <SEO title="Residencial" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Residencial</h2>
            <hr className="featurette-divider"></hr>
          </div>
        </div>
        <div className="row">
          { galleryone.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Residencial" />
            </div>
          ))}
          </div>
      </div>
    </Layout>
  )
}

export default GalleryOne
