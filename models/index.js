const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/inventory'

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function() {
    console.log('MongoDB is connected..');
}).catch(function(error) {
    console.log('MongoDB has error', error);
})

mongoose.connection.on('disconnect',
    function(event) {
        console.log('MongoDB is disconnected');

    }
)

module.exports = {
    Computer: require('./COMPUTER'),
    TV: require('./TV'),
}