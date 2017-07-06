const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('No se pudo conectar al servidor');
    }

    console.log('Conectado al servidor.')

    //Dalete many
    // db.collection('Todos').deleteMany({ text: 'Orejon' })
    //     .then((res) => {
    //         console.log(res);
    //     }, (err) => {
    //         console.log(err);
    //     })

    //Delete one
    // db.collection('Todos').deleteOne({ text: 'Orejon' })
    //     .then((res) => {
    //         console.log(res);
    //     }, (err) => {
    //         console.log(err);
    //     })

    //findOne and Delete
    // db.collection('Todos').findOneAndDelete({ text: 'Orejon' })
    //     .then((res) => {
    //         console.log(res);
    //     }, (err) => {
    //         console.log(err);
    //     })

    db.collection('Users').deleteOne({ _id: new ObjectID('595eb745be2106690949e42a') })
        .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        })

    db.close();

})