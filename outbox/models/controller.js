const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const assert = require('assert');


//database url
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";


//db name
const dbName = 'work';



//ready to go

exports.getAll = function(res){
  MongoClient.connect(url, function (err, client) {
       assert.equal(null, err);
       console.log("DB Server connection successful");
       var db = client.db(dbName);
       var col = db.collection("current");
       col.find().toArray(
         function(error,data){
          return data;
         }
       )


   });



}
