var Mapa = (function() {

	//funcion para obtener latitud y longitud de la dirección del cliente pulsado
	function getCoords(ruta) {

		var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+ruta+"&key=AIzaSyASDlevRW_kRdL93hcBUcGskqyVBfKT9Rc";

		$.post(url, function(data){

			var array = data.results;
			//objeto con las coordenadas
			var coords = array[0].geometry.location;

			events.publish("renderMapaModal", coords);

		}, "json");
	
	}

	return {
		init: function(){
			events.subscribe("getCoords", getCoords);
		}
	}
	
})();