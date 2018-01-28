const {mongoose} = require('./../server/db/mongoose')

const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5a681e936b4978406f55fb47';
const id = '5a655d6d1650ac405f64e36a';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo: ', todo);
// }).catch((e) => {console.log(e);});


// User.find({
//     _id: id
// }).then((user) => {
//     console.log('User: ', user);
// })

User.findById({
    _id: id
}).then((user) => {
    if(!user){
        return console.log('Not found user');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log('Not found user: ', user);
})