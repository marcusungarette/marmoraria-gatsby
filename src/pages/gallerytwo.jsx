import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GalleryTwo = () => {
  const { gallerytwo } = useStaticQuery(graphql`
      query {
        gallerytwo: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/projetosImagens/empresarial/"}}) {
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
      <SEO title="Empresarial" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Empresarial</h1>
          </div>
        </div>
        <div className="row">
          { gallerytwo.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Empresarial" />
            </div>
          ))}
          </div>
      </div>
    </Layout>
  )
}

export default GalleryTwo
