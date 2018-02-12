var Fichero = (function() {

	var url = App.url;

	var crearFichero = function(object){

		return {
			tipoFichero: object.tipoFichero,
			nombre: object.nombre,
			ruta: object.ruta,
			idVehiculo: object.idVehiculo			
		}
	}

	//función para obtener los ficheros del vehiculo según la id del vehiculo pulsado
	function getFicheros(idVehiculo) {

		$.post(url + "consultaFicheros.php", {idVehiculo: idVehiculo}, function(data){

			var array_ficheros = data;

			events.publish("renderFicheros", array_ficheros);

		}, "json");
	
	}

	//función para insertar un nuevo fichero en el vehiculo pulsado
	function nuevoFichero(datos){

        $.ajax({
        url: url+"nuevoFichero.php",
        type: "post",
        data: datos, //datos que vienen del ficheroView, datos del form
        dataType: "json",
        cache: false,
        contentType: false,
 		processData: false,
 		success:function(array_ficheros){

 			events.publish("renderFicheros", array_ficheros); 			
 		}
    })              
        

	}

	//función para eliminar un vehículo pulsado
	function deleteFichero(id) {

		$.post(url + "deleteFichero.php", {id: id}, function(data){

			console.log("Fichero " + id + " eliminado.");			

		}, "json");

	}

	return {
		init: function(){
			events.subscribe("getFicheros", getFicheros);
			events.subscribe("nuevoFichero", nuevoFichero);
			events.subscribe("deleteFichero", deleteFichero);
		},
		crearFichero: crearFichero
	}
	
})();