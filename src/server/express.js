const express = require('express');

const app = express();
const http = require('http').Server(app);
const port = 3002;

const path = require('path');
const fs = require('fs');
const cors = require('cors');

function apps() {
    app.use(cors());

    app.get('/explorer/:file', function(req, res){
        res.send(`${fs.readFileSync('/' + req.params.file + '.txt', 'utf8')}`);
    });

    http.listen(port, function(){
        console.log(`[INFO] Server listening on *: ${port}`);
    }) 
}

apps();