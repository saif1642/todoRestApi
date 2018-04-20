// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('unable to connect');
    }else{
        console.log('Connected To MongoDB Server');
    }
    
    db.close();
});