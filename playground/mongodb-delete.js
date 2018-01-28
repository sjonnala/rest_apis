const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Satish'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a6544b79a7fda5b44c07b29')
    }).then((result) => {
        console.log(result);
    })

    db.close();
});