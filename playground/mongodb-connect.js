const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj)

var user = {
    name: 'Andrew',
    age: 25
}

var { name } = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Lucardo',
    //     age: 23,
    //     location: 'Marcos Juárez'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Error de la conchilohue');
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // })

    db.close();

});