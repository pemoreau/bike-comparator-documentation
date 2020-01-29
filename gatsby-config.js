module.exports = {
  siteMetadata: {
    title: `Bike Comparator Documentation`,
    author: `Pierre-Etienne Moreau`,
    // You'd normally use a description like
    // "Advice and answers by the MyCompany-Team"
    description: `Bike Comparator : pour bien régler votre prochain vélo`,
    siteUrl: `https://help.dferber.de/`,
    language: "fr",
    texts: {
      allCollectionsText: "Toutes les Collections",
      searchPlaceholderText: "Chercher des réponses…",
      lastModifiedText: "Last edited",
      publishedOnText: "Publié le",
      writtenByText: "Ecrit par",
      articlesInCollectionZeroText: "articles dans cette collection",
      articlesInCollectionOneText: "article dans cette collection",
      articlesInCollectionTwoText: "articles dans cette collection",
      articlesInCollectionMultipleText: "articles dans cette collection",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
    "MarkdownRemark.frontmatter.collection": `CollectionsYaml`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-simple-analytics",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Help Center`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  pathPrefix: "/bike-comparator-documentation",
}
