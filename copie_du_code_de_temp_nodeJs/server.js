//modules to load:
var express = require('express');
var bodyParser = require('body-parser');
var myGenericMongoClient = require("./my_generic_mongo_client");
var myGenericRestExpressUtil = require("./my_generic_rest_express_util");


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/*
// (TEMPORAIRE) CORS enabled with express/node-js :
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});
*/

app.use(express.static('front-end'));


// à tester via postMan ou un équivalent 
// POST inscription { "nom" : "..." , "prenom" : "..." ,"email" : "..." , "objet" : "..." , "message" : "..."   }
app.post('/tp/inscription', function(req, res,next) {
var inscription = req.body; // JSON input data as jsObject with ok = null
console.log("posting new inscription :" +JSON.stringify(inscription));
/*
myGenericMongoClient.genericInsertOne("contacts",inscription,
	function(err,newId){
					   contact._id=newId;
					   myGenericRestExpressUtil.sendDataOrError(err,contact,res);// send back contact with _id
				   });
*/	
tabInscription.push(inscription);
myGenericRestExpressUtil.sendDataOrError(null,inscription,res);
});

var tabInscription = [
{ prenom : "jean" , nom : "Bon" , telephone : "0101010101" },
{ prenom : "alex" , nom : "Therieur" , telephone : "0404042222" }
 ];

// http://localhost:8282/tp/inscription?numReg=01
app.get('/tp/inscription', 
function(req, res , next) {
	var numReg=req.query.numReg;
	var tabRes = [];
	for(index in tabInscription){
		if(numReg == null){
		   tabRes.push(tabInscription[index]);
		}
	    else {
			var tel = tabInscription[index].telephone;
			if( tel.length >=2 && tel.substring(0,2) == numReg)
				tabRes.push(tabInscription[index]);
		}
	}
	myGenericRestExpressUtil.sendDataOrError(null,
	                                 tabRes,res);
				 					   
});


// http://localhost:8282/tp/xyz
app.get('/tp/xyz', 
function(req, res , next) {
	var tabData = [ { p1 : "v1a" , p2 : "v2a"} , {p1 : "v1b" , p2 : "v2b" }]
	myGenericRestExpressUtil.sendDataOrError(null,tabData,res);
				 					   
});

app.get('/', function(req, res , next) {
res.setHeader('Content-Type', 'text/html');
res.write("<html> <header>");
res.write('<meta http-equiv="refresh" content="0;URL=index.html">');
res.write("</header> <body>");
res.write("</body></html>");
res.end();
});

app.get('/test-ws', function(req, res , next) {
res.setHeader('Content-Type', 'text/html');
res.write("<html> <header>");
res.write("</header> <body>");
res.write('<p>test-ws for server.js (REST WS via nodeJs/express/mongoDB)</p>');
res.write('<p><a href="tp/xyz"> liste des contacts en JSON </a></p>');
res.write("</body></html>");
res.end();
});




app.listen(process.env.PORT , function () {
	/*
	myGenericMongoClient.setMongoDbName('test');
	myGenericMongoClient.setMongoDbUrl('mongodb://127.0.0.1:27017/test');
	myGenericMongoClient.executeInMongoDbConnection(
	function(currentDb){
		 console.log("connected to mongo database ");
	} );*/
    console.log("rest express node server listening at " + process.env.PORT);
});