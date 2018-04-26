const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = "ada25ed43e88512bcb0c08b";

if(!ObjectID.isValid(id)){
    console.log('ID NOT VALID')
}

// Todo.find({
//  _id:id
// }).then((todos)=>{
//     console.log("Todos: "+ todos);
// },(e)=>{
//  console.log(e);
// })

// Todo.findOne({
//     _id:id
//    }).then((todos)=>{
//        console.log("Todo: "+ todo);
//    },(e)=>{
//     console.log(e);
//    })

Todo.findById(id).then((todo)=>{
    if(!todo){
        console.log("Todo Not Found !")
    }
    else{
        console.log("Todob by id: "+ todo);
    }
    
},(e)=>{
    console.log(e);
})