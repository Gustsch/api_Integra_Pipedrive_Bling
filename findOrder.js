var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8002/bancoMongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("bancoMongo");
  dbo.collection("Orders").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
}); 