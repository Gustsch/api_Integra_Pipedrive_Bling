var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8002/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Orders", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 