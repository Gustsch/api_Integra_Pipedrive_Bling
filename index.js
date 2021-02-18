const express = require('express')
const app = express();
const port = 8001;
var mongo = require('mongodb'); 
// var alldeals = require('./getAllDeals.js')
var wondeals = require('./getWonDeals.js')

app.get("/", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });

//  app.get('/getAllDeals', function (req, res) {
//   var alldeals = require('./getAllDeals.js')
//   res.json(alldeals.res);
// });

app.get('/getWonDeals', function (req, res) {
  var wondeals = require('./getWonDeals.js')
  res.json(wondeals.res);
});

//todo gravar Bling
//criar conexão com o mongo
//pegar do Bling e gravar no Mongo
//pegar do mongo

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
