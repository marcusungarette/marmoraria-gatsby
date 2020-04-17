module.exports = {
  siteMetadata: {
    title: `Marmoraria União Campinas`,
    description: `Localizada na região de Campinas - SP a Marmoraria União vem desde 1996, comercializando mármores, granitos, quartzo, pedras decorativas nacionais e importadas.`,
    author: `Marcus Ungarette`,
    copyright: `© Copyright - Todos os direitos reservados - Desenvolvido por Marcus Ungarette`,
    siteUrl: `https://www.marmorariauniaocampinas.com.br`,
    socialMedia: {
      facebook: 'https://facebook.com/marmorariauniaocampinas/',
      instagram: 'https://www.instagram.com/marmorariauniaocampinas/',
      whatsapp: 'https://wa.me/5519998161843'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `empresarial`,
        path: `${__dirname}/src/projetosImagens/empresarial`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `residencial`,
        path: `${__dirname}/src/projetosImagens/residencial`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `institucional`,
        path: `${__dirname}/src/projetosImagens/institucional`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `marmores`,
        path: `${__dirname}/src/projetosImagens/marmores`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `granitos`,
        path: `${__dirname}/src/projetosImagens/granitos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sinteticos`,
        path: `${__dirname}/src/projetosImagens/sinteticos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marmoraria União Campinas`,
        short_name: `MUC`,
        start_url: `/`,
        background_color: `#706c61`,
        theme_color: `#706c61`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}



