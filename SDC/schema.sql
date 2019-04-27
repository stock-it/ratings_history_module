DROP DATABASE IF EXISTS ratings_history;

CREATE DATABASE ratings_history;

DROP TABLE IF EXISTS analyst_ratings;

\CONNECT ratings_history;

CREATE TABLE analyst_ratings (
  Ticker character varying(10) PRIMARY KEY,
  RecBuy integer,
  RecHold integer,
  RecSell integer,
  BuySum character varying,
  SellSum character varying
);

\COPY analyst_ratings 
FROM '/Users/megankeesee/ratings_history_module/dataTest100.csv' DELIMITER ',' CSV HEADER;


