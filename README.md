# ratings_history_module
## Description
The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. The Purchase History module renders a dynamic and individually expanding list of past purchases.    As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell.   As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 


## Note
Note: for a proxy server, the compressed webpack bundles (bundle.js.gz and bundle.js.br) can be uploaded to S3 rather than living in the client/dist/.

## Scripts
```
npm run react-dev (webpack --watch -d)
npm start (node index.js not nodemon index.js)
```

## CRUD API Routes
The ratings and history module supports CRUD operations for the two main data sources it uses to support its operations – 
* Analyst Reviews
* Purchase History

### Analyst Reviews

| Method | Endpoint | Description | Result
| --- | --- | --- | --- | 
| GET | api/:stockTicker | Retrieve a snapshot of analyst reviews with percentage recommendations to buy, hold or sell for specified stock | {"symbol" : "MSFT", "recBuy" : 7, "recHold" : 6, "recSell" : 15, "reviewBuy" : "Rubber scalable disintermediate markets Microsoft Corporation user-facing Tasty. \n The strategic revolutionize functionalities Quae ea quisquam.. \n Overall, scalable disintermediate markets Microsoft Corporation holistic Voluptatem reiciendis commodi.", "reviewSell" : "Rubber one-to-one repurpose communities user-facing Microsoft Corporation Tasty. \n For intuitive mesh communities Quae ea quisquam.. \n Hence, one-to-one repurpose communities Microsoft Corporation holistic Voluptatem reiciendis commodi."}

### Purchase History

| Method | Endpoint | Description | Result
| --- | --- | --- | --- | 
| GET | api/stock/:stockID/history | Retrieve a record of the user’s past purchases of the specified stock | {"symbol" : "ORCL", "purchase_id" : 11478, "name" : "Oracle Corporation", "timeinforce" : "Good for day", "submitted" : ISODate("2015-05-01T11:55:13.029Z"), "status" : "filled", "enteredQuantity" : 50, "filled" : ISODate("2018-03-30T00:50:14.922Z"), "filledQuantityShares" : 50, "filledQuantityPrice" : 50, "total" : 129 }

