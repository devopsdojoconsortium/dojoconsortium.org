module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Dojo Consortium',
    description: 'Recommended Practices from the Dojo Consortium',
    author: 'Dojo Consortium',
  },
  plugins: [
    'gatsby-plugin-uninline-styles',
    {
      resolve: `gatsby-plugin-csp`,
      // options: {
      //   mergeScriptHashes: false, // you can disable scripts sha256 hashes
      //   mergeStyleHashes: false, // you can disable styles sha256 hashes
      //   directives: {
      //     'script-src': `'self' 'nonce-dnVldGlmeQ==' *.dso.mil"`,
      //     'style-src': `'self' 'nonce-dnVldGlmeQ==' *.dso.mil www.google-analytics.com`,
      //     //   // you can add your directives or override defaults
      //   },
      // },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              showCaptions: false,
              quality: 100,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              dataAttributes: true,
            },
          },
          'gatsby-remark-check-links',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
    },

    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  title
                }
                rawMarkdownBody
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the 'ref'
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
          })),
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     headers: {
    //       '/*': [
    //         'Content-Security-Policy: __REPLACE_ME__',
    //         'Access-Control-Allow-Origin: null',
    //         'Referrer-Policy: origin',
    //         'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
    //         'Upgrade-Insecure-Requests: 1',
    //         'X-Content-Type-Options: nosniff',
    //         'X-Frame-Options: deny',
    //         'X-XSS-Protection: 1; mode=block',
    //       ],
    //     }, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
    //     mergeCachingHeaders: true, // boolean to turn off the default caching headers
    //     generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    //   },
    // },
  ],
}
