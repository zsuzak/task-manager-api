const {MongoClient, ObjectID} = require('mongodb'); 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect Database');
    }

    const db = client.db(databaseName);

    // Users Insert One
    // db.collection('users').insertOne({
    //     name: 'Zak',
    //     age: 21
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops);
    // });

    // Users Insert Many
    // db.collection('users').insertMany([
    //     {
    //         name: 'Adam',
    //         age: 15
    //     },
    //     {
    //         name: 'Hamzah',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.');
    //     }

    //     console.log(result.ops);
    // })

    // Users Find One
    // db.collection('users').findOne(
    //     {name: 'Adam'},
    //     (error, user) => {
    //         if (error) {
    //             return console.log('Unable to fetch');
    //         }

    //         console.log(user);
    //     }
    // )

    // Users Find
    // db.collection('users').find({age: 21}).toArray((error, users) => {
    //     console.log(users);
    // })
    
    // Users Update One
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ccca178a7e59176195f3a84")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // Tasks Update Many
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // Tasks Delete One
    db.collection('tasks').deleteMany({
        description: 'Buy groceries'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    // Users Delete Many
    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
});