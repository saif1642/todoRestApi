const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect',err);
    }
    console.log('Successfully Connected to MongoDB server');
});

module.exports = {mongoose};