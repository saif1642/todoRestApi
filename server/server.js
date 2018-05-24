const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const _ = require('underscore');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const Port = process.env.PORT||3000;


app.get('/',(req,res,next)=>{
    res.send('Hello World');
});

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
});

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
    }).catch((e)=>{
        res.status(400).send();
    });
});

//DELETE A TODO BY ID
app.delete('/todos/:id',(req,res)=>{
    //get the id
    var id = req.params.id;
    //validate the id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    //delete the todo
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
           return res.status(404).send();    
        }
        res.send(todo);
   }).catch((e)=>{
    res.status(400).send();
   });
});

//UPDATE A TODO
app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text','completed']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed){
          body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set:body},{new:true}).then((todo)=>{
         if(!todo){
             return res.status(404).send();
         }
         res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
       });

})



app.listen(Port,()=>{
   console.log('App started at Port: '+Port);
});

// app.listen(process.env.PORT || 3000, ()=>{
//     console.log('listening on', port);
//   });

module.exports = {app};




