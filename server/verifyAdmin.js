//const { client } = require('./connectionDB');
var jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.cookies.token;
    //const collection = client.db('product').collection('AllProduct');
    if(!token){
        return res.status('403').send({
            message: 'No token provided!'
        });
    }

    jwt.verify(token, 'marwane123', (err, decode) => {
        if(err){
            return res.status('401').send({
                message: 'Unauthorized'
            });
        }

        next();

        //collection.insertOne({name: req.query.name, price: req.query.price, ImgURL: req.query.URL, Doc: req.query.Doc, Tag: req.query.Tag}, (err, res) => {
            //if (err) throw err;
            //res.status('200').send({
                //message: 'data enserted correctly'
            //});
            //client.close();
        //});


    });
    
}

module.exports = verify;