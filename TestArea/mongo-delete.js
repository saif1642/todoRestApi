const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if(err){
        return console.log('unable to connect');
    }else{
        console.log('Connected To MongoDB Server');
    }

    //DELETE MANY
    // db.collection('Todos').deleteMany({text:'same to do'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     if(err){
    //         console.log('unable to delete',err);
    //     }
    // })


    //DELETE ONE
    db.collection('Todos').deleteOne({text:'same to do'}).then((result)=>{
        console.log(result);
    },(err)=>{
        if(err){
            console.log('unable to delete',err);
        }
    })


    //Find ONE And DELETE
    db.collection('Todos').findOneAndDelete({completed:true}).then((docs)=>{
        console.log(docs);
    })
    

  
    //db.close();
});