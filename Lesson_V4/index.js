/*
    For Latest Nodejs version since 14.0.0
*/
// import {ApolloServer,gql} from 'apollo-server';
// import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
// import {users, quotes} from './fakedb.js';
// import typeDefs from './schema.js';
// import resolvers from './resolvers.js';


/*
    In case you're running nodemon for the Node.js version 12, use this command
*/
const { ApolloServer } = require('apollo-server');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core');
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => {
    console.log(`Server runs at ${url}`);
});
