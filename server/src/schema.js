const { gql } = require('apollo-server');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql `
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    #Your schemas goes here
    type Launch {
        id :ID!
        site : String
        mission: Mission
        rocket: Rocket
        isBooked  : Boolean!
    }
    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        avatar : String
        friends :[User]
        trips: [Launch]!
    }
#
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }
#
    enum PatchSize {
        SMALL
        LARGE
    }
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    #Define operations clients can perform to access data that resembles 
    #the shape of the other Types in the Schema
    #*****CREATING QUERIES****
    # 1. Create Query Type in the Chema using SDL
    #2. Add fields to the Query Type
    #3. Create Resolvers  that for the  fields
    
    
    type Query{
        me: User!,
        launches: [Launch]!,
        launch(id: ID!): Launch,
        rockets : Rocket!
    }
    
#    type Query {
#        
#        me: User
#    }
#    type Mutation {
#        bookTrips(launchIds: [ID]!): TripUpdateResponse!
#        cancelTrip(launchId: ID!): TripUpdateResponse!
#        login(email: String): String # login token
#    }
#    type TripUpdateResponse {
#        success: Boolean!
#        message: String
#        launches: [Launch]
#    }
`;
//
// Functions that are responsible for returning values for
// fields that exist on Tyoes in a Schema. Resolvers execution is
// dependent on th incomint clien Queyr
// ***CREATING RESOLVERS
// 1.Resolver names must match the exact field name on your Schemas types
// 2.Resolvers must return the value type declared for the marhing field
// 3.Resolvers can be async
// 4.Can retrieve data from any source
/***** ARGUMENTS */
//Allow clients to pass data variables with Queries that can
// be used in your Resolvers to get data
/* 1. Must be defined in our Schema
2. Can be added to any field
3. Either have to be Scalars or Input types*/
/* *** Input Types  */
/*Just like Types, but used for Arguments
All field value types must be other Input Types or Scalars*/
const resolvers ={
    Query :{
        me(){
            return {
                email : 'yoda@masters.com',
                avatar : 'http://yoda.png',
                friends : []
            }
        },
        rockets(){
          return{
              name: "FALCON 9",
              type : "Capsule"

          }
        }
    }
}
module.exports = {typeDefs , resolvers};
