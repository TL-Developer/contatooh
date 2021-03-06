module.exports = function(app){

	var Contato = app.models.contato;

	var controller = {};

	controller.listaContatos = function(req, res){
		Contato.find().exec()
		.then(function(contatos){
			res.json(contatos);
		},
		function(erro){
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	controller.obtemContato = function(req, res){
		var _id = req.params.id;
		Contato.findById(_id).exec()
		.then(function(contao){
			if(!contato) throw new Error("Contato não encontrado");
			res.json(contato);
		},
		function(erro){
			console.log(erro);
			res.status(404).json(erro);
		});	
	};

	controller.removeContato = function(req, res) {

  	};

  	controller.salvaContato = function(req, res) {
  		
  	};

	return controller;
};