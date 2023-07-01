const {client} = require('./connectionDB');

const getClientProduct = (req, res, next) => {
    client.connect(err => {
        if (err) throw err;
        //console.log(req.cookies);
        const collection = client.db('product').collection('clientsProduct');
        var query = {clientID: req.cookies.clientID};
        collection.find(query).toArray((err, result) => {
            if (err) throw err;
            res.status(200).send({
                data: result,
                message: 'data extracted correctly',
                extracted: true
            });
            client.close();
        })
    })
}

module.exports = getClientProduct;