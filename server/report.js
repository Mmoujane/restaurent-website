const {client} = require('./connectionDB');
const SSE = require('./SSE');

const sse = new SSE();

const report = (req, res, next) => {
    client.connect((err) => {
        if (err) throw err;
        const collection = client.db('reports').collection('report');
        collection.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 1 * 60 * 60 * 24 });
        const data = {"createdAt": new Date(), firstname: req.body.Fname, lastname: req.body.Lname, email: req.body.email, report: req.body.report};
        collection.insertOne(data, (err, result) => {
            if (err) throw err;
            res.status(200).send({
                message: 'data enserted correctly',
                inserted: true
            });
            next();
        //collection.find({}).toArray((err, result) => {
             //if (err) throw err;
             //sse.send({
                // message: 'data extracted correctly',
                // data : result,
                // extracted: true
               //}, 'report');
            //client.close();
            //});
            //client.close();
        });
    });
}

module.exports = report;