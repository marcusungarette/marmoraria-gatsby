import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { facebook, instagram, whatsapp },
        copyright,
        description,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            facebook
            instagram
            whatsapp
          }
          copyright
          description
        }
      }
    }
  `)
  return (
    <div className="bg-color-1">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-md-6 ">{description}<hr className="featurette-divider"></hr><p>Horário de Funcionamento :<br></br> Segunda a Quinta - 08:00 às 18:00<br></br>Sexta - 08:00 às 17:00<br></br>
          Sábado -
          08:00 às 12:00</p></div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Styled.FacebookIcon />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Styled.InstagramIcon />
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Styled.WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-color-2 text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
