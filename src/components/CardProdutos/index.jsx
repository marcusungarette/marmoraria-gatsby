import React from "react"
import { Link } from 'gatsby'
import * as Styled from "./styled"
import Image from '../ImagesProduct'

const CardProdutos = (props) => {
  return (
    <Styled.CardWrapperProduct className="card" background= { props.backgroundCard }>
      <Image name={ props.nameImage } />
      <div className="card-body text-center">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <Link to={ props.productPath } className={`btn btn-${props.colorButton}`}>
          Ver Mais
        </Link> 
      </div>
    </Styled.CardWrapperProduct>
  )
}

export default CardProdutos

