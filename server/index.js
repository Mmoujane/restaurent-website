const express = require("express");
//const res = require("express/lib/response");
const signin = require('./login');
const cors = require("cors");
const upload = require('./Upload');
const verify = require('./verifyAdmin');
const { client } = require('./connectionDB');
const getPublic = require('./getPublic');
const path = require('path');
const insertClientProduct = require('./insertClientProduct');
const getClientProduct = require('./getClientProduct');
const cookie_parser = require('cookie-parser');
const deleteClientProduct = require('./deleteClientProduct');
//const real_time_update = require("./real-time-update");
const report = require("./report");
const SSE = require('./SSE');

const sse = new SSE();


const PORT = process.env.PORT || 3001;

const app = express();


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use('/api/static/media', express.static(path.join(__dirname, 'upload')));
app.get("/api/product/get-commands", [verify, sse.init]);

app.post("/api/auth/signin", signin);

app.post("/api/product/add-product", [verify ,upload.single('foodImg')] , (req, res, next) => {
  //console.log(req.file, req.body);
  client.connect(err => {
    if (err) throw err;
    const collection = client.db('product').collection('AllProduct');
    var data = {url: req.file.filename, foodName: req.body.foodName, foodPrice: req.body.foodPrice, foodDoc: req.body.foodDoc, stars: 1, bestFood: false};
    collection.insertOne(data ,(err, result) => {
      if (err) throw err;
      res.status(200).send({
        message: 'data inserted correctly',
        inserted: true
      });
      client.close();
    })
  })
});

app.get("/api/product/get-product", getPublic);
app.post("/api/product/add-client-product", insertClientProduct, (req, res) => {
  client.connect(err => {
    if (err) throw err;
    const collection = client.db('product').collection('clientsProduct');
    collection.find({}).toArray((err, result) => {
        if (err) throw err;
        sse.send({
            message: 'data extracted correctly',
            data : result,
            extracted: true
        }, 'command');
        client.close();
    });
})
});
app.get("/api/product/get-client-product", getClientProduct);
app.delete("/api/product/client-product/:id", deleteClientProduct, (req, res) => {
  client.connect(err => {
    if (err) throw err;
    const collection = client.db('product').collection('clientsProduct');
    collection.find({}).toArray((err, result) => {
        if (err) throw err;
        sse.send({
            message: 'data extracted correctly',
            data : result,
            extracted: true
        }, 'command');
        client.close();
    });
})
});
app.post("/api/reports/make-report", report, (req, res) => {
  client.connect(err => {
    if (err) throw err;
    const collection = client.db('reports').collection('report');
    collection.find({}).toArray((err, result) => {
        if (err) throw err;
        sse.send({
            message: 'data extracted correctly',
            data : result,
            extracted: true
        }, 'report');
        client.close();
    });
})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});