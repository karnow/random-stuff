const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
type Query {
    greeting: String,
    intereStringUrls: [String]
}

`;

const data = {
    greeting: "Hello World",
    intereStringUrls: ["www.onet.pl", "www.wp.pl"]
}

const server = new ApolloServer({typeDefs, rootValue:data});

server.listen({port: 4000}).then((result) => console.log(result.url, result.subscriptionsPath));



