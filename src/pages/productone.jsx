import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProductOne = () => {
  const { productone } = useStaticQuery(graphql`
  query {
    productone: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/projetosImagens/marmores/"}}, sort: {fields: name, order: ASC}) {
      nodes {
        name
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
      <SEO title="Marmores" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Marmores</h2>
            <hr className="featurette-divider"></hr>
          </div>
        </div>
        <div className="row">
          { productone.nodes.map(image => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Img key={image.id} fluid={image.childImageSharp.fluid} alt="Marmores" />
            </div>
          ))}
          </div>
      </div>
    </Layout>
  )
}

export default ProductOne
