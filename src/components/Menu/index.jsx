import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-color-1">
        <Link className="navbar-brand" to="/">
          <Img fixed={logo.childImageSharp.fixed} alt="Uniao"/>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">                      
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" activeStyle={{ color: "#48483a" }} className="nav-link" activeClassName="active">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" activeStyle={{ color: "#48483a" }} className="nav-link" activeClassName="active">SOBRE</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" activeStyle={{ color: "#48483a" }} className="nav-link" activeClassName="active">PROJETOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" activeStyle={{ color: "#48483a" }} className="nav-link" activeClassName="active">PRODUTOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" activeStyle={{ color: "#48483a" }} className="nav-link" activeClassName="active">CONTATO</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Menu
    