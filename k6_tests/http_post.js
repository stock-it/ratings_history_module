import http from "k6/http";

export default function() {
  var url = "http://localhost:3001/api/stocks/post";
  var payload = JSON.stringify({ ticker: 'SLACK' });
  var params =  { headers: { "Content-Type": "application/json" } }
  http.post(url, payload, params);
};