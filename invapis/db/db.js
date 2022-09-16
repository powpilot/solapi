const mongoose = require('mongoose');
//require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

console.log("using conn string: "+mongoString);

var dbconnection = mongoose.connect(mongoString, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database"); 
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


