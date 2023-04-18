/*
    For Latest Nodejs version since 14.0.0
*/
// import {ApolloServer,gql} from 'apollo-server';
// import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
// import {users, quotes} from './fakedb.js';


/*
    In case you're running nodemon for the Node.js version 12, use this command
*/
const { ApolloServer, gql } = require('apollo-server');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core');

const {users, quotes} = require('./fakedb');

const typeDefQry = gql`
    type Query{
        users: [User]
        quotes: [Quote]
    }
    type User{
        id: ID!
        name: String
        address: String
        email: String
    }
    type Quote{
        name: String
        by: ID
    }
`


const resolversQry = {
    Query:{
        users: ()=> users,
        quotes: ()=> quotes
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
