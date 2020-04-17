import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { Email } from "@styled-icons/material-twotone/Email"
import { LocalPhone } from "@styled-icons/material-twotone/LocalPhone"
import { LocationOn } from "@styled-icons/material-twotone/LocationOn"
import { WhatsappSquare } from "@styled-icons/fa-brands/WhatsappSquare"


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
const WhatsappIcon = styled(WhatsappSquare)`
  color: #706c61;
  margin-right: 5px;
  width: 35px;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contato" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h2>Contato</h2>
            <hr className="featurette-divider"></hr>
          </div>
          <div className="col-md-6 mb-5">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Nome" />
            </div>
            <div className="form-group">
              <input name="Phone" type="text" className="form-control" id="exampleInputPhone" placeholder="Telefone" />
            </div>
            <div className="form-group">
              <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Escreva sua mensagem"></textarea>
            </div>
            <button type="submit" className="btn btn-colorbtn">Enviar</button>
          </form>
          </div>

          <div className="col-md-6">
            <ul className="list-group text-center">
              <li className="list-group-item">
              <EmailIcon 
              /> marmorariauniao@terra.com.br 
              </li>
              <li className="list-group-item">
              <PhoneIcon  
              />(19) 3229-9893 ou
              (19) 3223-2396
              </li>
              <li className="list-group-item">
              <WhatsappIcon  
              /> WhatsApp - (19)99816-1843
                            </li>
              <li className="list-group-item">
              <LocalIcon  
              />Av. John Boyd Dunlop, n° 5.821 -
                Bairro Cidade Satélite Íris
                Campinas - São Paulo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
