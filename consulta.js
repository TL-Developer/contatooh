var MongoClient = require('mongodb').MongoClient,
	ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('555d2ab461a41e64d2d8cc26');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(erro, db){
	if(erro) throw err;
	db.collection('contatos').findOne({_id: _idProcurado}, function(erro, contato){
		if(erro) throw err;
		console.log(contato);
	});
});