var puerto = 81;

var post = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
    ];


// Express
const express = require('express');
const app = express();

//app.use(express.static('public'));

app.get('/', function(req, res) {    
    res.send("");
    console.log('corriendo en /');
});

post
app.get('/posts', function(req, res) {
  console.log(post);
  res.send(post);
  console.log('corriendo en /posts');
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



