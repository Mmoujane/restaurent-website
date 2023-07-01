const { client } = require('./connectionDB');
const { encryp } = require('./loginHashFunc');
var jwt = require("jsonwebtoken");


const signin = (req, res, next) => {client.connect(err => {
    if (err) throw err;
    console.log("requested");
    const collection = client.db("login").collection("admins");
    // perform actions on the collection object
    collection.findOne({name: req.body.user},(err, result) => {
        if (err) throw err;
        if(!result){
            res.status(404).send({ message: "User Not found." , login: false});
        }else{
            passComp = encryp(req.body.hash_password, result.hash_pass);
            if(!passComp){
                res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                    login: false
                });
            }else{
                let token = jwt.sign({id: result._id}, 'marwane123',{ expiresIn: '24h' });
                res.cookie('token' ,token , { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
                res.status(200).send({
                    id: result._id,
                    username: result.name,
                    accessToken: token,
                    message: "login successfuly",
                    login: true
                  });
            }
        }
        client.close();
    });
  });
}

module.exports = signin;