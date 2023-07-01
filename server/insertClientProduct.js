const {client} = require('./connectionDB');
const SSE = require('./SSE');
const sse = new SSE();


const inserClientProduct = (req, res, next) => {

    client.connect(err => {
        if (err) throw err;
        //console.log(req.cookies, req.body);
        const collection = client.db('product').collection('clientsProduct');
        const Product = client.db('product').collection('AllProduct');
        collection.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 1 * 60 * 60 * 24 });
        var query = {clientID: req.cookies.clientID};
        let average01 = 0;
        let average02 = 0;
        let average = 0;
        let starsSum = 0;
        let rate = 0;
        var data = {"createdAt": new Date(),URL:req.body.URL, foodname: req.body.foodname, price: req.body.price, size: req.body.size, quantity: req.body.quantity, stars: req.body.stars, clientID: req.cookies.clientID, address: null, phoneNumber: null, home: null, bank: null};
        if(req.body.URL && req.body.foodname && req.body.price && req.body.stars && req.body.size && req.body.quantity && !req.body.address && !req.body.phone && !req.body.home && !req.body.bank){
            collection.insertOne(data, (err, response) => {
                if (err) throw err;
               // console.log('data enserted correctly');
                res.status(200).send({message: 'data enserted correctly', inserted: true});
                //client.close();
            });
            if(req.body.stars !== 0){
                Product.findOne({foodName: req.body.foodname}, (err, result) => {
                    if (err) throw err;
                    //console.log(result.stars);
                    average01 = result.stars;
                });
                collection.find({foodname: req.body.foodname}, {projection: {_id: 0, stars: 1}}).toArray((err, result) => {
                    if(err) throw err;
                    for(i = 0; i < result.length; i++){
                        if(result.stars !== 0){
                            starsSum += result[i].stars;
                            rate++;
                            //console.log(starsSum, rate);
                        }
                    }

                    average02 = (starsSum / rate);
                    average = (average01 + average02) / 2;
                    //console.log(average, average02);
                    Product.updateOne({foodName: req.body.foodname}, {$set: {stars: average, bestFood: average >= 4 ? true : false}} , (err, result) => {
                        if (err) throw err;
                        //console.log('updated correctly');
                        client.close();
                    });
                }); 
            }else{
                client.close();
            }
        }else if(!req.body.URL && !req.body.foodname && !req.body.price && !req.body.stars && !req.body.size && !req.body.quantity && !req.body.home && !req.body.bank && req.body.address && req.body.phone) {
            var newValue = {$set : {address: req.body.address, phoneNumber: req.body.phone}};
            collection.updateMany(query, newValue, (err, response) => {
                if (err) throw err;
                //console.log(response);
                if(response.matchedCount === 0){
                    return res.status(404).send({message: 'you need to fill the product form first', inserted: false})
                }
                res.status(200).send({message: 'document is filled in', inserted: true});
                client.close();
            });
        }else if(!req.body.URL && !req.body.foodname && !req.body.price && !req.body.stars && !req.body.size && !req.body.quantity && req.body.home && !req.body.bank && !req.body.address && !req.body.phone){
            var newValue = {$set : {home: 'true', bank: 'false'}};
            collection.updateMany(query, newValue, (err, response) => {
                if (err) throw err;
                //console.log(response);
                if(response.matchedCount === 0){
                    return res.status(404).send({message: 'you need to fill the product and the location forms first', inserted: false})
                }
                res.status(200).send({message: 'operation completed succefully', inserted: true});
                //client.close();
                //res.redirect('/api/product/get-commands');
                next();
            });

        } else {
            client.close();
            return res.status(401).send({message: 'forbiden', inserted: false});
            //client.close();
        }
    })
}

module.exports = inserClientProduct;