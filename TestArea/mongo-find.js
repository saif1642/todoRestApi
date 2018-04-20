// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;
// console.log(obj)


// var User = {name:"saif",Age:25};
// var {name} = User;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('unable to connect');
    }else{
        console.log('Connected To MongoDB Server');
    }
    

    //FETCHING FROM MONGODB
    // db.collection('Todos').find({
    //  _id:new ObjectID('5ad9dded62d35f1584ff3add')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //    if(err){
    //        console.log('Unable to fetch Data',err);
    //    }
    // });


    //Countig data FROM MONGODB
    // db.collection('Users').find().count().then((count) =>{
    //        console.log('Todos Count: '+count);
           
    //    },(err) => {
    //       if(err){
    //           console.log('Unable to fetch Data',err);
    //       }
    //    });

    //FETCHING data by given name FROM MONGODB
    db.collection('Users').find({Name:'Saif1642'}).toArray().then((docs) =>{
        console.log('Users:');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
       if(err){
           console.log('Unable to fetch Data',err);
       }
    });
   







    //INSERT THE COLLECTION IN MONGODB
    // db.collection('Todos').insertOne({
    //     text:'nothing to do',
    //     completed:false
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert' + err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
       
    //     Name:'Saif1642',
    //     Age:25,
    //     Location:'Bangladesh'
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert' + err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    db.close();
});