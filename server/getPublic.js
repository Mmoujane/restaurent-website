const { client } = require('./connectionDB');

const getPublic = (req, res, next) => {
    client.connect(err => {
        if (err) throw err;
        const collection = client.db('product').collection('AllProduct');
        collection.find({}).toArray((err, result) => {
            if (err) throw err;
            if(!req.cookies.clientID){
                res.cookie('clientID',Math.random().toString(), { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
            }else{
                res.cookie('clientID',req.cookies.clientID, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
            }
            res.status(200).send({
                message: 'data extracted correctly',
                data : result,
                extracted: true
            });
            client.close();
       })
})
}

module.exports = getPublic;