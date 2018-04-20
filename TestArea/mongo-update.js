const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('unable to connect');
    }else{
        console.log('Connected To MongoDB Server');
    }

    //Find One And Update
    db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5ad9dee26e68ec11ac0d889b')
    },{
        $set:{
              Name:'Nayeem New'
        },
        $inc:{
            Age:5
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


    //db.close();
});