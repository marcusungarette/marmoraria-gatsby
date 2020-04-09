import React from "react"
import { Link } from 'gatsby'
import * as Styled from "./styled"
import Images from '../Images'

const CardBootstrap = (props) => {
  return (
    <Styled.CardWrapper className="card" background= { props.backgroundCard }>
      <Images name={ props.nameImage } />
      <div className="card-body text-center">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <Link to={ props.projectPath } className={`btn btn-${props.colorButton}`}>
          Ver Mais
        </Link> 
      </div>
    </Styled.CardWrapper>
  )
}

export default CardBootstrap
