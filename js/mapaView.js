var MapaView = (function() {
	
	//funcion para iniciar el mapa de google con los parámetros de lat y lng según cada dirección del cliente
	function renderMapaModal(coords) {

		var modalMapaCompiled = Handlebars.templates.modalMapa();

		$('#divMapaModal').html(modalMapaCompiled);		

		// solo entrará en la siguiente función, si se ha mostrado el modal del mapa
		$('#modalMapa').on('shown.bs.modal', function () {

			//coordenadas dinámicas según dirección del cliente...ejemplo: {lat: -25.363, lng: 131.044}
		  	var uluru = coords; 
		  	//creación del mapa, lo inserto en el div contMapa del modalMapa
		    var map = new google.maps.Map(document.getElementById('contMapa'), {
		      zoom: 17,
		      center: uluru
		    });
		    //parámetro para crear la marca en el mapa, en la misma posición de la dirección
		    var marker = new google.maps.Marker({
		      position: uluru,
		      map: map
		    }); 
		});		

		// mostrar modal del mapa manualmente, y con el evento anterior, muestra el mapa dentro del modal
		$('#modalMapa').modal('show');  
    }

    return {
    	init: function(){
    		events.subscribe("renderMapaModal", renderMapaModal);
    	}
    }
})();