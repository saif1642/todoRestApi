const express = require('express');
const bodyParser = require('body-parser');
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

const Port = 3000;
app.listen(Port,()=>{
   console.log('App started at Port: '+Port);
})

module.exports = {app};




