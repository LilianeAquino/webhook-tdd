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
    challenge: 'Olá, Ser Humano',
    verify_token: 'subscribe'
};

server.get('/webhook', (req, res) => {
    
    if (req.query['hub.mode'] != hub.mode || req.query['hub.verify_token'] != hub.verify_token || req.query['hub.challenge'] != hub.challenge ){
        res.status(403).end();
    }else{    
        res.send(hub.challenge);
        res.status(200).end(); 
    }
});


server.post('/webhook', (req, res) => {
    res.send('Olá');
});

server.listen(port);

module.exports = server;

