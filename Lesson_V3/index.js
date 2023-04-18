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
        user(id:ID!): User
        quotes: [Quote]
        iquote(by:ID!): [Quote]
    }
    type User{
        id: ID!
        name: String
        address: String
        email: String
        quotes: [Quote]
    }
    type Quote{
        name: String
        by: ID
    }
`

/*
    user(_,args)
    _ is given because first element will be parent which is undefined
    restructure id
*/
const resolversQry = {
    Query:{
        users: ()=> users,
        user: (_,{id})=> users.find(user => user.id === id),
        quotes: ()=> quotes,
        iquote: (_,{by})=> quotes.filter(quote => quote.by === by)
    },
    User:{
        quotes: (ur) => quotes.filter(quote => quote.by === ur.id)
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
