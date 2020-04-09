import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { Email } from "@styled-icons/material-twotone/Email"
import { LocalPhone } from "@styled-icons/material-twotone/LocalPhone"
import { LocationOn } from "@styled-icons/material-twotone/LocationOn"


const EmailIcon = styled(Email)`
  color: #706c61;
  width: 35px;
`
const PhoneIcon = styled(LocalPhone)`
  color: #706c61;
  width: 35px;
`
const LocalIcon = styled(LocationOn)`
  color: #706c61;
  width: 35px;
`

const Contact = () => {
  const text = "Lorem ipsum dolor"
  return (
    <Layout>
      <SEO title="Contato" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contato</h1>
            <p>{text}</p>
          </div>
          <div className="col-md-6 mb-5">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Nome" />
            </div>
            <div className="form-group">
              <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva sua mensagem"></textarea>
            </div>
            <button type="submit" className="btn btn-colorbtn">Enviar</button>
          </form>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
              <EmailIcon /> contato@marmorariauniao.com
              </li>
              <li className="list-group-item">
              <PhoneIcon  /> 
                (19)1234-5678
              </li>
              <li className="list-group-item">
              <LocalIcon  />
                Av Jonh Boyd Dunlop, 1234
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
