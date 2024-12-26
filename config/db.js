const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = 'mongodb+srv://karanSingh:FkFkaCUdSQ7iUPcF@cluster0.n6n0m.mongodb.net/nodeApp?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('Error connecting to MongoDB:', err));


module.exports = mongoose;
