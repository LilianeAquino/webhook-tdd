const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 6002;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
        extended: true
}));

let hub = {
    mode: 'subscribe',
    verify_token: 'jNmYkDS24V'
};

server.get('/webhook', (req, res) => {
    
    if (req.query['hub.mode'] != hub.mode || req.query['hub.verify_token'] != hub.verify_token){
        res.status(403).end();
    }else{    
        res.send(req.query['hub.challenge']);
        res.status(200).end(); 
    }
});


server.post('/webhook', (req, res) => {
    res.send('Olá');
});

server.listen(port);

module.exports = server;

