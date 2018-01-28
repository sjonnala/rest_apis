const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');


    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Eat lunch'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then(result => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Jen'
    },{
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    
    db.close();
});