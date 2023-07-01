const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://user:password@systemlogin.8xnaw.mongodb.net?retryWrites=true&w=majority";
module.exports.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
