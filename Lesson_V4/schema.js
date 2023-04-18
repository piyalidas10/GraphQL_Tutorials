const { gql } = require('apollo-server');
const typeDefs = gql`
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
    type Mutation{
        createUser(userNew: UserInput!): User
    }
    input UserInput{
        name:String!
        address:String!
        email:String!
    }
`

module.exports = {typeDefs}