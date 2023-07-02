const {client} = require('./connectionDB');
const EventEmmiter = require('events').EventEmitter;



class SSE extends EventEmmiter {
    constructor(){
        super();
        this.init = this.init.bind(this);
    }

    init = (req, res) => {
        res.writeHead(200, {
            "connection": "keep-alive",
            "content-type": "text/event-stream",
            "cache-control": "no-cache"
        });


        const responseHandler = (data) => {
            if(data.event){
                res.write(`event: ${data.event}\n`);
            }
            res.write(`data: ${JSON.stringify(data.data)}\n\n`);
            console.log(data.event);
        }

        this.on('data', responseHandler);
        req.on('close', () => {
            this.removeListener('data', responseHandler);
        });

    send = (data, event) => {
        this.emit('data', {data, event});
    }
}

module.exports = SSE;
