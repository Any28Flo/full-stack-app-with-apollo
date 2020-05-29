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
        trips: [Launch]!
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    enum PatchSize {
        SMALL
        LARGE
    }
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).

    type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
        me: User
    }
    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): String # login token
    }
    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }
`;
module.exports = typeDefs;
