const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://marwane:marwane123@systemlogin.8xnaw.mongodb.net?retryWrites=true&w=majority";
module.exports.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });