/*
    For Latest Nodejs version since 14.0.0
*/
// import {ApolloServer,gql} from 'apollo-server';
// import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';


/*
    In case you're running nodemon for the Node.js version 12, use this command
*/
const { ApolloServer, gql } = require('apollo-server');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core');

const typeDefQry = gql`
    type Query{
        greet:String
    }
`

const resolversQry = {
    Query:{
        greet: ()=> {
            return 'Hello World'
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefQry,
    resolvers: resolversQry,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => {
    console.log(`Server runs at ${url}`);
});
