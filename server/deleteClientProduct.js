const {client} = require('./connectionDB');
const objId = require('mongodb').ObjectId;


const deleteClientProduct = (req, res, next) => {
    client.connect(err => {
        if (err) throw err;
        const collection = client.db('product').collection('clientsProduct');
        //console.log(req.params.id, req.cookies.clientID);
        var query = {_id: new objId(req.params.id),clientID: req.cookies.clientID};
        collection.deleteOne(query, (err, result) => {
            if (err) throw err;
            res.status(200).send({
                message: 'item is deleted successfully',
                 deleted: true
            });
            //client.close();
            next();
        })
    })
}

module.exports = deleteClientProduct;