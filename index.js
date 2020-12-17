const {ApolloServer, gql} = require("apollo-server");
const PORT = process.env.PORT || 4000

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

const server = new ApolloServer({typeDefs, rootValue:data, playground:true, introspection:true});

server.listen({port: PORT}).then((result) => console.log(result.url, result.port));



