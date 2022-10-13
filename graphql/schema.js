var { buildSchema } = require("graphql");
module.exports = buildSchema(`
type RootQuery{
    hello:DataType!
}

type DataType{
    text:String!
    views:Int!
}


type RootMutation{
    createUnit(UnitInput:UnitInputData!):Unit!
    createReservation(ReservationInput:ReservationInputData!):Reservation!
}
input UnitInputData{
    unit_name:String
}

input ReservationInputData{
    unitID: ID!
    guestName: String!
    checkIn: String!
    checkOut: String!
}

type Unit{
    unit_name:String!
    id:ID!
}
type Reservation{
    unitID: ID!
    guestName: String!
    checkIn: String!
    checkOut: String!
}

schema{
    query:RootQuery
    mutation:RootMutation
}  

`);
