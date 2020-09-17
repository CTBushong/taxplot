require('regenerator-runtime/runtime');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `tax·plot`,
    name: `tax·plot`,
    siteUrl: `https://taxplot.com`,
    description: `tax·plot is a silly tax project by Chris Bushong`,
    hero: {
      heading: `Welcome to tax·plot`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/ctbushong `,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/thebushong`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/chris-bushong-1903b07/`,
      },
    ],
  },
  plugins: [ 
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: "/login",
        loginRedirectPath: "/",
        socialLogins: ["google"],
      },
    },
        {
          resolve: "@narative/gatsby-theme-novela",
          options: {
            contentPosts: "content/posts",
            contentAuthors: "content/authors",
            basePath: "/",
            authorsPage: true,
            sources: {
              local: true,
              // contentful: true,
            },
          },
        },
        
 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tax·plot`,
        short_name: `tax·plot`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
   
  ],
};
