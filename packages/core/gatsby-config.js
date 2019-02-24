module.exports = ({ endpoint }) => ({
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `GQL`,
        // This is field under which it's accessible
        fieldName: `gql`,
        // Url to query from
        url: endpoint,
      },
    },
  ]
})