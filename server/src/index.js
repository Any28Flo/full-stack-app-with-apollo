const { ApolloServer } = require('apollo-server');
const {typeDefs, resolvers} = require('./schema');
/*
const { createStore } = require('./utilis.js');


const UserAPI = require('./datasources/user');
*/

/* Import and cal  createStore function to set up our SQLite database*/
//const store = createStore();



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
/* Adding dataSources function to connect instances of LaunchAPI and UserAPi */
/*

const server = new ApolloServer({
    typeDefs,
    dataSources : () =>({
        launchAPI : new LaunchAPI(),
        userAPI : new UserAPI({store})
    })
});
*/

// The `listen` method launches a web server.
const server = new ApolloServer({
    typeDefs,
    resolvers
})
server.listen(4000)
    .then( () =>   console.log(`🚀 Server ready at 4000`))