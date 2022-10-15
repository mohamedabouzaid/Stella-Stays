var { buildSchema } = require("graphql");
module.exports = buildSchema(`


type RootMutation{   
    createReservation(ReservationInput:ReservationInputData!):Reservation!
    updateReservation(UpdateReservationInput:editReservationInputData!):Reservation!
    cancelReservation(DeleteReservationInput:editReservationInputData!):Reservation!
}



input ReservationInputData{
    unitID: ID!
    guestName: String!
    checkIn: String!
    checkOut: String!
}
input editReservationInputData
{
     reservationID: ID!
     unitID: ID!
     guestName: String!
     checkIn: String!
     checkOut: String!
}


type Reservation{
    unitID: ID!
    guestName: String!
    checkIn: String!
    checkOut: String!
}

schema{
  
  mutation:RootMutation
}  

`);
