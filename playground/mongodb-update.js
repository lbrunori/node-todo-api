const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Error trying to connect with database server.');
    }

    console.log('Connection established.');

    // db.collection('Todos')
    //     .findOneAndUpdate({ _id: new ObjectID('595d756621e51b4fa725993d') }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, { returnOriginal: false })
    //     .then((res) => {
    //         console.log(res);
    //     }, (err) => {
    //         console.log(err);
    //     })

    db.collection('Users').findOneAndUpdate({ name: 'Lucas Brunori' },
        {
            $set: {
                name: 'Lucas Brunori'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        })


    db.close()
})

