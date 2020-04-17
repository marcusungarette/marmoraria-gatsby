import React from "react"
import Layout from "../components/Layout"
import CardBootstrap from "../components/CardBootstrap"
import SEO from "../components/seo"

const Project = () => {
  return (
    <Layout>
      <SEO title="Projetos" lang="pt-br" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h2>Projetos</h2>
            <hr className="featurette-divider"></hr>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <CardBootstrap
              nameImage="image1"
              titleCard="Residencial"
              textCard="Projetos em apartamentos e casas seja urbano, praia ou de fazenda. O uso de mármore, granito ou quartzo valoriza o seu imóvel, agregando beleza e sofisticação a qualquer ambiente."
              colorButton="color-1"
              backgroundCard="#b0b4a4"
              projectPath="/galleryone"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardBootstrap
              nameImage="image2"
              titleCard="Empresarial"
              textCard="Para estabelecimentos comerciais, que prezam por qualidade aos detalhes, como clínicas e comércios em geral, sendo utilizado também em fachadas e letreiros ornamentais."
              colorButton="color-light"
              backgroundCard=""
              projectPath="/gallerytwo"
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardBootstrap
              nameImage="image3"
              titleCard="Institucional"
              textCard="Igrejas, escolas e laboratórios utiliza-se da aplicação de granito ou quartzo pela sua resistência e facilidade na limpeza e manutenção, além de dar um ar mais agradável ao ambiente."
              colorButton="color-1"
              backgroundCard="#b0b4a4"
              projectPath="/gallerythree"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Project
