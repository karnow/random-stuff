const {ApolloServer, gql} = require("apollo-server");
const PORT = process.env.PORT || 4000

const typeDefs = gql`
type Query {
    greeting: String,
    intereStringUrls: [String],
    randomDiceThrow: Int,
    pi: Float,
    isTodayFriday: Boolean,
    randomCoinTossesUntilTrue: [Boolean]
}

`;
function rootValue() {
    
const today =new Date;
const getRandomDiceThrow =(sides)=> Math.ceil(Math.random()* sides);
const randomCoinToss =() => Math.random()>0.5;
const getRandomCoinTossesUntilTrue =()=> {
    const result =[];
    do {
        result.push(randomCoinToss());
    } while (!result[result.length -1 ]);
    return result;
    }



const data = {
    greeting: "Hello orld",
    intereStringUrls: ["www.onet.pl", "www.wp.pl", 8],
    randomDiceThrow: getRandomDiceThrow(6),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 5,
    randomCoinTossesUntilTrue:getRandomCoinTossesUntilTrue()

}
return data;
}

const server = new ApolloServer({typeDefs, rootValue, playground:true, introspection:true});

server.listen({port: PORT}).then((result) => console.log(result.url, result.port));



