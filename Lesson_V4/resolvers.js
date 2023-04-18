const {users, quotes} = require('./fakedb');
const {randomBytes} = require('crypto');

/*
    user(_,args)
    _ is given because first element will be parent which is undefined
    restructure id
*/
const resolvers = {
    Query:{
        users: ()=> users,
        user: (_,{id})=> users.find(user => user.id === id),
        quotes: ()=> quotes,
        iquote: (_,{by})=> quotes.filter(quote => quote.by === by)
    },
    User:{
        quotes: (ur) => quotes.filter(quote => quote.by === ur.id)
    },
    Mutation:{
        createUser: (_,{userNew}) => {
            const id = randomBytes(5).toString("hex");
            users.push({
                id,
                ...userNew
            })
            return users.find(user => user.id === id)
        }
    }
}

module.exports = {resolvers}