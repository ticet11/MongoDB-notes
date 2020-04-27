// Use database/ create and use database
// > use databaseName

// Show databases
// New database will not populate until data added. (users != data)
// > show dbs

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
// > db.getUsers()

// Delete user
// > db.dropUser('user')