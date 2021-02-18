var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8002/bancoMongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});