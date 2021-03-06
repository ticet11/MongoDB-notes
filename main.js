// SQL = Structured Query Language
// NOSQL = uhh... not Structured Query Language

// Use database/ create and use database
> use databaseName

// Show databases
// New database will not populate until data added. (users != data)
> show dbs

// Create user
db.createUser({
    user: 'Brian',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

db.createUser({
    user: 'Benny',
    pwd: 'BingoPassword',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

// Show Users
> db.getUsers()

// Delete user
> db.dropUser('user')

// Create a collection
> db.createCollection('collectionName')

// Show collections
> show collections

// Add documents into a collection
> db.collection.insert({
>   'key': 'value'
> })

// add many items to collection
// 
db.books.insertMany([
    {
        'name': 'Confident Ruby',
        'publishedDate': new Date(),
        'authors': [
            { 'name': 'Avdi Grimm' }
        ]
    },
    {
        'name': 'Angels & Demons',
        'publishedDate': new Date(),
        'authors': [
            { 'name': 'Dan Brown'}
        ]
    },
    {
      "name": "Blink",
      "publishedDate": new Date(),
      "authors": [
        {"name": "Malcolm Gladwell"}
      ]
    }
])

// Query for all items
> db.collectionName.find()
// Easier to read version
> db.collectionName.find().pretty()

// Query for specific item in collection
> db.collectionName.find( {name: "itemName"} ).pretty()