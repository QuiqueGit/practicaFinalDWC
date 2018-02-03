var ClienteList = (function () {

	var url = App.url;

	var array_clientes = [];

	/*
	* función genérica para encontrar la posición en el array de una atributo y su valor
	*	
	*	retorna el índice del array, -1 si no lo encuentra
	*/
	function encontrarIndex(array, atributo, valor) {

	    for(var i = 0; i < array.length; i++) {

	        if(array[i][atributo] == valor) {

	            return i;
	        }
	    }
	    return -1;
	}

	//primera función que se ejecuta cuando inicia el index.html
	var consultarClientes = function(){

		$.post(url+'consulta.php', function(data){

			console.log("Petición hecha");

			for(var i = 0; i < data.length; i++){
			 
				var cliente = Cliente.crearCliente(data[i]);

				array_clientes.push(cliente);				
			}	

			events.publish("consultar", array_clientes);

		},"json").fail(function() {

		    events.publish("error");	 
		  });
		  				
	}

	var nuevoCliente = function(objetoCliente){

		objetoCliente.submit = "1";

		$.post(url+'nuevo.php', objetoCliente, function(data){			
			
			//agregar el atributo id que recibe de PHP al insertar el nuevo cliente al objeto
			objetoCliente.id = data.id;
			//crear nuevo cliente con los datos obtenidos del objeto
			var cliente = Cliente.crearCliente(objetoCliente);
			//metemos el objeto en el array de clientes
			array_clientes.push(cliente);
			console.log("Cliente creado en la database.");
			//hacemos el publish, avisando que hemos creado un cliente, pasando el array actualizado
			events.publish('consultar', array_clientes);			

		}, "json");		

	}

	var editarCliente = function(objetoCliente){
		
		objetoCliente.submit = "1";

		var index = encontrarIndex(array_clientes, "id", objetoCliente.id);

		$.post(url+'actualizar.php', objetoCliente, function(data){

	  		var cliente = Cliente.crearCliente(objetoCliente);

	  		array_clientes[index] = cliente;

			console.log("Datos actualizados.");
			events.publish('consultar', array_clientes);

		}, "json");
		
	}

	var borrarCliente = function(objetoCliente){

		objetoCliente.submit = "1";	

		var index = encontrarIndex(array_clientes, "id", objetoCliente.id);

		$.post(url+'eliminar.php', objetoCliente, function(data){
			
			array_clientes.splice(index, 1);

			console.log('Datos borrados.');
			events.publish('consultar', array_clientes);

		}, "json");	

	}

	return {
		init: function(){
			events.subscribe("nuevoCliente", nuevoCliente);
			events.subscribe("editarCliente", editarCliente);
			events.subscribe("borrarCliente", borrarCliente);
		},
		consultarClientes: consultarClientes,
	}


})();

ClienteList.init();