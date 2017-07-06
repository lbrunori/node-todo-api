const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connecto to MongoDB server');

    // db.collection('Todos').find({ _id: new ObjectID('595d756621e51b4fa725993d') }).toArray()
    //     .then((res) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(res, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos').find({ _id: new ObjectID('595d756621e51b4fa725993d') }).count()
    //     .then((res) => {
    //         console.log(`Todos count ${res}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users').find({ name: 'Poronga arenosa' }).toArray().then((res) => {
        console.log(`Count: ${JSON.stringify(res, undefined, 2)}`);
    })

    db.close();
})