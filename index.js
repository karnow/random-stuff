const {ApolloServer, gql} = require("apollo-server");
const PORT = process.env.PORT || 4000

const typeDefs = gql`
type Query {
    greeting: String,
    intereStringUrls: [String],
    randomDiceThrow: Int
}

`;
function rootValue() {

const getRandomDiceThrow =(sides)=> Math.ceil(Math.random()* sides);

const data = {
    greeting: "Hello orld",
    intereStringUrls: ["www.onet.pl", "www.wp.pl"],
    randomDiceThrow: getRandomDiceThrow(6)
}
return data;
}

const server = new ApolloServer({typeDefs, rootValue, playground:true, introspection:true});

server.listen({port: PORT}).then((result) => console.log(result.url, result.port));



