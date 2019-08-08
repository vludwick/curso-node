const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const app = express();


app.use(cors());
// mongoose.connect('mongodb://localhost:27027/nodeapi', { useNewUrlParser: true});
// require('./src/model/Product');
app.get("/", (req, res) => {
    fs.readFile("./src/view/index.html", (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
})
app.get("/algo1", (req, res) => {
    res.send("Você solicitou outro algo.");
})
app.get("/algo2", (req, res) => {
    res.send("Você solicitou o terceiro algo.");
})
app.listen(3001);