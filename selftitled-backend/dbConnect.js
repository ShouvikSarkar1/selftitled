'use strict'
const Mongoose = require('mongoose');

const uri = process.env.DB_URI || "mongodb://localhost:27017/selftitled";

// Connection to MongoDB
Mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log('MongoDB Error: '+ error.message));

// Default connection
const db = Mongoose.connection;

// Connection error notification
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;