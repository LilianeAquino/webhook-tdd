const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 6001;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
        extended: true
}));

//hub.mode=subscribe * hub.challenge=olá *hub.verify_token=subscribe

server.get('/webhook', (req, res) => {

    if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'subscribe'){
        res.send(req.query['hub.challenge']);
        res.status(200).end();        
    }else{    
        res.status(403).end();
    }

});

server.post('/webhook', (req, res) => {
    res.send('Olá');
});

server.listen(port);

module.exports = server;

