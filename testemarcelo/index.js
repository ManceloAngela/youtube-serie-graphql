const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const XerpaService = require( "./src/services/Xerpa.service" );



const server = new ApolloServer({
  ...graphql,
  dataSources: () =>( {
    xerpaService: XerpaService
  })
});

server.listen().then(({ url }) => console.log(url));
