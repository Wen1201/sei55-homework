const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    passwordDigest: String,

    createdAt: {
        type: Date,
       
    },

    
    
    reservations: [
        {
            row: Number,
            col: Number,
            

            flight: {
                ref: 'Flight', 
              
                
            }
        }
    ]
}); // Schema()

module.exports = mongoose.model('User', UserSchema);
