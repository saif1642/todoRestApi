const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



app.post('/todos',(req,res,next)=>{
   var todo = new Todo({text:req.body.text});
   todo.save().then((doc)=>{
      res.send(doc);
   },(e)=>{
       if(e){
           res.status(400).send(e);
       }
   })
});

//GET all Todos
app.get('/todos',(req,res) => {
   Todo.find().then((todos)=>{
       res.send(todos);
   },(e)=>{
       res.status(400).send(e);
   })
})

//Get Individual Todo
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
         if(todo){
             res.send({todo});
         }else{
             res.status(404).send();
         }
    },(e)=>{
        res.status(400).send();
    })
})



// app.listen(Port,()=>{
//    console.log('App started at Port: '+Port);
// })

app.listen(process.env.PORT || 3000, ()=>{
    console.log('listening on', http.address().port);
  });

module.exports = {app};




