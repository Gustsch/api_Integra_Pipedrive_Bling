var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8002/bancoMongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("bancoMongo");
  var myobj = { id: "id", 
            user_id: "user_id", 
            name : "name", 
            active : 'active', 
            value :'value', 
            currency:'currency', 
            add_time : 'add_time' , 
            status: 'status', 
            close_time : 'close_time'};
  dbo.collection("Orders").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 