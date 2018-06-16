var puerto = 81;


// consultando json
var files = require('fs');
console.log("\n *STARTING* \n");
var pronosticos = files.readFileSync("pronostico.json");
console.log("Ouput Content : \n" + pronosticos);
console.log("\n *EXIT* \n");


// Express
const express = require('express');
var partialResponse = require('express-partial-response');
const app = express();

app.use(express.static(__dirname + '/'));
app.use(partialResponse({query: 'fields'}));

app.get('/', function(req, res) {    
  res.send("");
  console.log('corriendo en /');
});

app.get('/posts', function(req, res) {    
  res.json(JSON.parse(pronosticos));
  //res.send(pronosticos);
  console.log('corriendo en /posts');
});

app.get('/posts', function(res, res, next){
  res.json(JSON.parse(pronosticos));
});


app.listen(puerto, function(){
  console.clear();
  console.log('Node corriendo en el puerto: ' + puerto);
});



//firebase
/*
var firebase = require('firebase-admin');
var serviceAcount = require("./baseDatosAngular-cf7189f5a9bf.json");    

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAcount),
    databaseURL: "http://projetopensar-f73e8.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref("users");
ref.on("child_added", function(snapshot){
    var el = snapshot.val();
    console.log(el);
    console.log(snapshot.key);
});

*/



