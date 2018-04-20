const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect',err);
    }
    console.log('Successfully Connected to MongoDB server');
})

//Create Todo Model
var Todo = mongoose.model('Todos',{
     text:{
        type:String
     },
     completed:{
       type:Boolean
     },
     completedAt:{
       type:Number
     }
})

//Create A new instance of todo model

var newTodo = new Todo({text:"My 2nd To do",completed:true,completedAt:11.41});

newTodo.save().then((docs)=>{
  console.log(JSON.stringify(docs));
},(e)=>{
    if(e){
        return console.log('Unable to save todo',err);
    }
})
