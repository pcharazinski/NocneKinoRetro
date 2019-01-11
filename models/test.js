const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({user:{type: String}})

module.exports = mongoose.model('test', testSchema);