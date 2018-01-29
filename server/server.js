require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT;
console.log('port: ', port);

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.send(404);
    }

    Todo.findById({_id: id}).then((todo) => {
        if(!todo){
            return res.send(404);
        }
        res.send({todo});
    }, (e) => {
        res.send(400);
    });
    
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {app};