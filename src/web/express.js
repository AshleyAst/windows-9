const express = require('express');
const path = require('path');
const axios = require('axios');

const fetch = require('node-fetch');

const app = express()();

app.get('/app-store/install:app', (req, res) => {
    res.send("Install App by ID: " + req.params.app);
    
});