const { default: mongoose } = require('mongoose');

let db; // for storing our database connection


// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(
//   'mongodb://127.0.0.1:27017',  // URL to reach the server
//   {}, // options object
//   (err, client) => {

//     // Check for errors
//     if( err ){
//       console.log('Error connecting to MongoDB server;', err);
//       process.exit( 1 );  // quit the program with a non-zero error code
//     }

//     // If we got this far, it means the connection was successful
//     db = client.db('ba'); // use 'client' to select a database by name

//     // TODO: how to Flight.destroy_all in MongoDB before we start inserting?
//     insertFlights();

//   }
// );  // .connect()


// const insertFlights = () => {

//   db.collection('flights').insertMany(
//     [
//       {
//         flight_number: 'BA123',
//         origin: 'SYD',
//         destination: 'MEL',
//         departure_date: new Date('2022-11-20T04:20:00Z'),
//         airplane: { name: '737 Max', rows: 20, cols: 6 },
//         reservations: [
//           { row: 1, col: 1, user_id: 10 },  // NOT real user_ids, just placeholders
//           { row: 2, col: 3, user_id: 10 },
//           { row: 3, col: 3, user_id: 11 },
//         ] // reservations[]
//       },
      
//       {
//         flight_number: 'BA456',
//         origin: 'SYD',
//         destination: 'MEL',
//         departure_date: new Date('2022-11-23T04:20:00Z'),
//         airplane: { name: '767', rows: 16, cols: 4 },
//         reservations: [
//           { row: 1, col: 1, user_id: 10 },  // NOT real user_ids, just placeholders
//           { row: 1, col: 3, user_id: 11 },
//           { row: 1, col: 3, user_id: 11 },
//         ] // reservations[]
//       },
//     ], // end of array of flights to insert 
    
//     (err, result) => {

//       if( err ){
//         console.log('Error inserting flights:', err);
//         return;
//       }

//       console.log(`Success! Added ${ result.insertedCount } flights.`);

//       // process.exit( 0 ); // no errors
//       printFlights(); // query the flights we just added and print them out      

//     }
  
//   );

// }; // insertFlights()


// const printFlights = () => {

//   // Like ActiveRecord Flight.all
//   db.collection('flights').find().toArray( (err, flights) => {
    
//     if( err ){
//       console.log('Error retrieving flights:', err);
//       return;
//     }

//     console.log('Flights', flights);

//     process.exit( 0 );

//   });

// }; // printFlights()

// ==========================MONGOOSE

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    flight_number: 'string',
    origin: 'string',
    destination: 'string',
    departure_date: new Date,
    airplane_id: 'string',
    reservations_id: 'string'

});

const Flight = mongoose.model('Flight', schema);

const SYD = new Flight({origin: 'SYD'});
SYD.save(function(err){
    if(err) return handleError(err);
})

Flight.create({ origin: 'SYD'}, function(err, origin){
    if(err) return handleError(err);
})

Flight.insertMany(
    [
        { origin: 'SYD'},
        { destination: 'MEL'},
        { flight_number: '888'}
    ],
    function(err){
    if(err) return handleError(err);

});

mongoose.connect('mongodb://localhost:27017');

