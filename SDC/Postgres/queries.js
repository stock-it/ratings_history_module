const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'megankeesee'
});

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

// pool.connect();

const getAllRatings = (req, res) => {
  const queryString = 'SELECT * FROM analyst_ratings ORDER BY ticker ASC';
  pool.query(queryString, (err, ratings) => {
    if (err) {
      res.status(404).send(err);
    } else {
      response.status(200).json(ratings.rows);
    }
  })
};

const getRatingsByTicker = (req, res) => {
  const queryString = 'SELECT * FROM analyst_ratings WHERE ticker = $1';
  const ticker = req.params.ticker;
  pool.query(queryString, [ticker],  (err, ratings) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(ratings.rows); 
    }
  })
};

const createStock = (req, res) => {
  const queryString = 'INSERT INTO analyst_ratings (ticker, recbuy, rechold, recsell, buysum, sellsum) VALUES ($1, $2, $3, $4, $5,  $6)'
  const { ticker, recbuy, rechold, recsell, buysum, sellsum } = req.body;
  pool.query(queryString, [ticker, recbuy, rechold, recsell, buysum, sellsum], (err, results) => {
    if (err) {
      res.status(409).send(err);
    } else {
      res.status(200).send(`Company added with ticker: ${ticker}`);
    }
  })
};

const updateStock = (req, res) => {
  const ticker = req.params.ticker;
  console.log(ticker);
  const queryString = `UPDATE analyst_ratings SET recbuy = $1, rechold = $2, recsell = $3, buysum = $4, sellsum = $5 WHERE ticker = '${ticker}'`;
  const {recbuy, rechold, recsell, buysum, sellsum} = req.body;
  console.log(req.body);
  pool.query(queryString, [recbuy, rechold, recsell, buysum, sellsum], (err, results) => {
    if (err) {
      console.log(err);
      res.status(409).send(err);
    } else {
      res.status(200).send(`Company ${ticker} updated`);
    }
  })
}

const deleteStock = (req, res) => {
  const queryString = 'DELETE FROM analyst_ratings WHERE ticker = $1';
  const ticker = req.body.ticker;
  pool.query(queryString, [ticker], (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(`Stock ${ticker} deleted with ID`);
    }
  })
}

module.exports = {
  getAllRatings,
  getRatingsByTicker,
  createStock,
  updateStock,
  deleteStock
}