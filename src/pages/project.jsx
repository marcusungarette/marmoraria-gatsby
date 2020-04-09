import React from "react"
import Layout from "../components/Layout"
import CardBootstrap from "../components/CardBootstrap"
import SEO from "../components/seo"

const Project = () => {
  const text = "Lorem ipsum dolor"
  return (
    <Layout>
      <SEO
        title="Projetos"
        lang="pt-br"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Projetos</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardBootstrap
              nameImage="image1"
              titleCard="Residencial"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
              colorButton="color-1"
              backgroundCard="#b0b4a4"
              projectPath="/galleryone"
            />
            
          </div>
          <div className="col-4">
            <CardBootstrap
              nameImage="image2"
              titleCard="Empresarial"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
              colorButton="color-light"
              backgroundCard=""
              projectPath="/gallerytwo"
            />
          </div>
          <div className="col-4">
            <CardBootstrap
              nameImage="image3"
              titleCard="Institucional"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
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
