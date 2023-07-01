const {client} = require('./connectionDB');

const real_time_update = (req, res, next) => {
    client.connect(err => {
        if (err) throw err;
        const collection = client.db('product').collection('clientsProduct');
        const Report = client.db('reports').collection('report');
        res.writeHead(200, {
            "connection": "keep-alive",
            "content-type": "text/event-stream",
            "cache-control": "no-cache"
        });
        var interval = setInterval(() => {
            collection.find({}).toArray((err, result) => {
                if (err) throw err;
                DataResponse(res, result);
                //client.close();
            });

            Report.find({}).toArray((err, result) => {
                if (err) throw err;
                reportResponse(res, result);
            });
        }, 2000);
        req.on("close", () => {
            clearInterval(interval);
            client.close();
        });
    });
}

const DataResponse = (res, result) => {
    res.write("event: command\n");
    res.write("data: " + JSON.stringify({
        message: 'data extracted correctly',
        data : result,
        extracted: true
    }) + '\n\n');
    //res.write("\\n\\n");
}

const reportResponse = (res, result) => {
    res.write("event: report\n");
    res.write('data: ' + JSON.stringify({
        message: "report extracted correctly",
        data: result,
        extracted: true
    }));
    res.write("\n\n");
}

module.exports = real_time_update;