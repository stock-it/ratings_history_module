require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Purchase = require('../database-mongodb/Stock2.js');
const db = require('../SDC/Postgres/queries')

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:stockid', express.static(path.join(__dirname, '../client/dist')));

//Queries to Postgres DB
// app.get('/api/allStocks', db.getAllRatings);
app.get('/api/:ticker', db.getRatingsByTicker);
app.post('/api/stocks/post', db.createStock);
app.patch('/api/ratings/:ticker', db.updateStock);
app.delete('/api/stocks/deleteStock', db.deleteStock);


app.get('/api/history/:stockID', (req, res) => {
  Purchase
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
});

const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
