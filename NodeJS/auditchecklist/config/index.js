console.log('Initializing config');
const environment = 'development';
const mongoose = require('mongoose');
const configs = require('./state/' + environment + '.json');
console.log(configs);

//connect to database
console.log('connecting to database...');
mongoose.connect(configs.database);


//on connection 
mongoose.connection.on('connected', () => {
    console.log('connected to DB @ 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in DB Connection:' + err);
    }
});



module.exports = {
    configs: configs
}