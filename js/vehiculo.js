var Vehiculo = (function() {

	var url = App.url;

	var crearVehiculo = function(object){

		return {
			tipo: object.tipo,
			matricula: object.matricula,
			fechaFabricacion: object.fechaFabricacion,
			marca: object.marca,
			modelo: object.modelo,
			idCliente: object.idCliente			
		}
	}

	//función para obtener los vehiculos según la id del cliente pulsado
	function getVehiculos(idCliente) {

		$.post(url + "consultaVehiculo.php", {id_cliente: idCliente}, function(data){

			var array_vehiculos = data;

			events.publish("renderVehiculoModal", array_vehiculos);

		}, "json");
	
	}
	//función para insertar un nuevo vehiculo en el cliente pulsado
	function nuevoVehiculo(vehiculo){

		$.post(url + "nuevoVehiculo.php", vehiculo, function(data){

			console.log("Vehiculo creado.");			

		}, "json");

	}
	//función para actualizar un vehículo pulsado
	function updateVehiculo(vehiculo){

		$.post(url + "actualizarVehiculo.php", vehiculo, function(data){

			console.log("Vehiculo " + vehiculo.id + " actualizado.");			

		}, "json");

	}
	//función para eliminar un vehículo pulsado
	function deleteVehiculo(id) {

		$.post(url + "deleteVehiculo.php", {id: id}, function(data){

			console.log("Vehiculo " + id + " eliminado.");			

		}, "json");

	}

	return {
		init: function(){
			events.subscribe("getVehiculos", getVehiculos);
			events.subscribe("nuevoVehiculo", nuevoVehiculo);
			events.subscribe("updateVehiculo", updateVehiculo);
			events.subscribe("deleteVehiculo", deleteVehiculo);
		},
		crearVehiculo: crearVehiculo
	}
	
})();