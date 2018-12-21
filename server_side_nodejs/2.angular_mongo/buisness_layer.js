var express =require("express");
var mongoClient =require("mongodb").MongoClient;

// configure middleware

var app = express();
app.use(express.static('mongo_files'));

//configure API requests

app.get('/', (req, res) =>{
    res.redirect("mongo_demo.html");
})

app.get('/getProducts', (req, res)=>{
    var url = "mongodb://127.0.0.1:27017";
    mongoClient.connect(url, {useNewUrlParser:true}, (err, client)=>{
        if(!err){
            var db = client.db("angulardb");
            db.collection("tblproducts").find().toArray((err, documents)=>{
                if(!err){
                    res.send(documents) ;
                    console.log(documents);
                }else{
                    res.send(err);
                }
            })
        }else{
            console.log(err);
        }
    })
} );

app.listen(8080);
console.log("Server listening to port no 8080");