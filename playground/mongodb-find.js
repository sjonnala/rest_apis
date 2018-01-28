const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos')
    //     .find({_id: new ObjectID('5a65065dab848fe93b401a5d')})   //completed: true
    //     .toArray().then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Satish'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    db.close();
});