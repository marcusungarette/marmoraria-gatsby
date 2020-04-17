import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Images from '../components/ImagesHome'
import PlanetImage from '../svg/PlanetImage'
import DiamondImage from '../svg/DiamondImage'
import ProjetosImage from '../svg/ProjetosImage'
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO
     title="Home"
     description="Marmoraria localizada em Campinas/SP, que atende toda a região."
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Images name="image2" />
            </div>
            <div className="carousel-item">
              <Images name="image1"  />
            </div>
            <div className="carousel-item">
              <Images name="image3" />
            </div>
            <div className="container">
              <div className="carousel-caption text-center py-sm-3 py-lg-5">
                <a className="btn btn-outline-light" href="https://wa.me/5519998161843" role="button">Orçamento no WhatsApp</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    </div>
    
    {/* 3 marketing icons starts here */}
    <div className="container marketing">
      <div className="row">
        {/* Element 1 */}
        <div className="col-md-4 py-5 text-center">
          <PlanetImage />
          <h2 className="text-center py-auto">ISO Ambiental</h2>
          <p className="text-center mb-3">Realizamos todos os processos de tratamento vigentes requeridas. Tornando o ambiente de trabalho livre de contaminação e poluição, temos a responsabilidade com as pessoas e com o meio ambiente em que vivemos.</p>
          <Link to='/about'>
            <p className="text-center"><a className="btn btn-colorbtn text-white" role="button">Ver detalhes »</a></p>
          </Link>
          
        </div>

        {/* Element 2 */}
        <div className="col-md-4 py-5 text-center">
          <DiamondImage />
          <h2 className="text-center py-auto">Produtos</h2>
          <p className="text-center mb-3">A Marmoraria União tem procurado aperfeiçoar cada vez mais os serviços de acabamento, mão de obra e atendimento. Procuramos oferecer materiais de Mármore, Granito, Quartzo com preços competitivos.</p>
          <Link to='/product'>
            <p className="text-center"><a className="btn btn-colorbtn text-white"  role="button">Ver detalhes »</a></p>
          </Link>
        </div>

        {/* Element 3 */}
        <div className="col-md-4 py-5 text-center">
          <ProjetosImage />
          <h2 className="text-center py-auto">Projetos</h2>
          <p className="text-center mb-3">Atendendo incorporadoras, construtoras e consumidores finais, a Marmoraria União propõe-se a executar trabalhos diferenciados e artísticos, prezando pela qualidade e prazo de nossos clientes.</p>
          <Link to ='/project'>
            <p className="text-center"><a className="btn btn-colorbtn text-white"  role="button">Ver detalhes »</a></p>
          </Link>
        </div>
      </div>
    </div>


    {/* 3 marketing icons finish here */}

    <hr className="featurette-divider "></hr>


    <div className="container">
      <div className="col-12 py-4">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Planejamento e realização. <span className="text-muted">Projetos feitos por quem entende.</span></h2>
            <p className="lead">A Marmoraria União atua a cerca de 25 anos no mercado de beneficiamento final de rochas ornamentais, sinônimo de confiança e tradição.<br></br><br></br>Converse com um de nossos especialistas nos telefones:<br></br><b>(19) 3229-9893 ou (19) 3223-2396.</b></p>
          </div>
            <div className="col-md-5">
              <Images name="image1" />
            </div>
        </div>
          <Link to='/contact'>
            <div className="text-center py-3">
              <a className="btn btn-colorbtn text-white" role="button">Agendar Orçamento »</a>
            </div>
          </Link>
        </div>
      </div>
  </Layout>
)

export default IndexPage