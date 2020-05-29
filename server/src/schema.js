const { gql } = require('apollo-server');

const typeDefs = gql `
    #Your schemas goes here
    type Launch {
        id :ID!
        site : String
        mission : Mission
        rocket : Rocket
        isBooked  : Boolean!
    }
    type User {
        id: ID!
        email : String
        trips : [Launch]!
    }
    }
    type Mission {
        name : String
        missionPatch( size: PatchSize) : String
    }
    type Rocket{
        id : ID!
        name : String
        type : String

    }
    enum PatchSize{
        SMALL
        LARGE
    }
    type Query {
        launches : [Launch]!
        launch(id : ID!) : Launch
        me : User
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