import React from "react"
import Layout from "../components/Layout"
import CardProdutos from "../components/CardProdutos"
import SEO from "../components/seo"

const Product = () => {
  return (
    <Layout>
      <SEO title="Projetos" lang="pt-br" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h2>Produtos</h2>
            <hr className="featurette-divider"></hr>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <CardProdutos
              nameImage="image1"
              titleCard="Mármores"
              textCard="Indicado para ambientes internos por ter maior porosidade despontando de várias maneiras na decoração. Pode-se usar em diferentes ambientes, como em bancadas de banheiros e cozinhas."
              colorButton="color-1"
              backgroundCard="#b0b4a4"
              productPath="/productone"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardProdutos
              nameImage="image2"
              titleCard="Granitos"
              textCard="Pela sua elegância e resistência, muitas são as opções de uso do granito. Pode ser usada em praticamente todos os ambientes, sejam eles áreas internas ou externas."
              colorButton="color-light"
              backgroundCard=""
              productPath="/producttwo"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardProdutos
              nameImage="image3"
              titleCard="Quartzo"
              textCard="O quartzo é uma superfície acessível a variados tipos de projeto, pois oferece soluções para revestimento, bancada, pisos, pavimentos e fachadas é de longe uma das mais resistentes do mercado."
              colorButton="color-1"
              backgroundCard="#b0b4a4"
              productPath="/productthree"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Product
