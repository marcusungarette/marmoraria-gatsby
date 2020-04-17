import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Images from '../components/ImagesAbout'

const About = () => (
  <Layout>
    <SEO title="Sobre" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4"> 
            <h2>Nossa Historia</h2>
            <hr className="featurette-divider"></hr>
          <div className="row featurette py-4">
            <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            
            <div className="col-md-5">
              <Images name="about1" />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette py-4">
              <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
            <div className="col-md-5 order-md-1">
            <Images name="about2" />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette py-4">
              <div className="col-md-7">
              <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
            <div className="col-md-5 order-md-1">
            <Images name="about2" />
            </div>
          </div>

          </div>
        </div>
      </div>
  </Layout>
)

export default About
