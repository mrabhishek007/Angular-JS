// Connecting with Mongodb

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1/:27017" ;
mongoClient.connect(url, {useNewUrlParser: true}, function(err, client){    // For mongo v4.0.0 use this technique to connect mongodb otherwise for older version remove {useNewUrlParser: true}
    if(!err){
        var db = client.db("angulardb");
        db.collection("tblproducts").find()
        .toArray(function(err, result){
            if(err) console.log(err);
            console.log(result);
            client.close();
        }) ;
    }else{
        console.log(err)
    }  
})