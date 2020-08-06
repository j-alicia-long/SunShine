const MongoClient = require('mongodb').MongoClient

class Connection {
    static connectToMongo() {
        if ( this.db ) return Promise.resolve(this.db)
        return MongoClient.connect(this.url, this.options)
            .then(db => this.db = db)
    }

    // or in the new async world
    static async connectToMongo() {
        if (this.db) return this.db
        this.db = await MongoClient.connect(this.url, this.options)
        return this.db
    }
}

Connection.db = null
Connection.url = "mongodb+srv://admin:admin@sunshine.39p7a.mongodb.net/database?retryWrites=true&w=majority";
Connection.options = {
    bufferMaxEntries:   0,
    reconnectTries:     5000,
    useNewUrlParser:    true,
    useUnifiedTopology: true,
}

module.exports = { Connection }
