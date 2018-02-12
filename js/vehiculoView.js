var VehiculoView = (function() {

	//funcion que captura los datos del modal de vehiculos, tanto para editar como para insertar un nuevo
	function capturarDatos(){

		var tipo = $('#select_vehiculo').val();
		var matricula = $('#matricula_input').val();
		var fechaFabricacion = $('.datepicker_vehiculo').val();
		var marca = $('#marca_input').val();
		var modelo = $('#modelo_input').val();			
		var idCliente = $('#idCliente').val();

		return {
			tipo: tipo,
			matricula: matricula,
			fechaFabricacion: fechaFabricacion,
			marca: marca,
			modelo: modelo,			
			idCliente: idCliente
		}
	}
	
	//funcion para renderizar el modal de los vehiculos del cliente, recibe el array con los vehiculos del cliente pulsado
	function renderVehiculoModal(array_vehiculos) {	

		var noVehiculos;
		//la API devuelve la id del cliente sin vehiculos si no tiene, o el array de todos los vehiculos que tiene
		array_vehiculos.idSinVehiculo ? noVehiculos = true : noVehiculos = false;
		
		var datos = {noVehiculos: noVehiculos, vehiculos: array_vehiculos};

		var modalVehiculoCompiled = Handlebars.templates.vehiculo(datos);

		$('#divVehiculo').html(modalVehiculoCompiled);	

		$('.datepicker_vehiculo').datepicker({dateFormat: 'yy-mm-dd', changeYear: true, changeMonth: true, yearRange: "1920:2018"});

		$('.modal-backdrop').remove(); //elimina el fondo del anterior modal si hubiese

		$('#modalVehiculo').modal('show');

		/*EVENTOS EDITAR, ACEPTAR, ELIMINAR y FICHEROS de VEHICULOS*/
		if (!array_vehiculos.idSinVehiculo) {

			var cards = $('div.cards');

        array_vehiculos.forEach(function(element, index) {

	        var card = cards.find('div.botones').eq(index);
	        
	        //evento en botón EDITAR de las cards vehiculos, para que salga el botón aceptar y los campos sean accesibles...
			card.on("click", "button#update_vehiculo", function(){

				//hacer visible el botón aceptar
				$(this).siblings("#aceptar_vehiculo").removeClass("invisible");
				//habilitar los inputs
				$(this).parent().parent().children().removeAttr("disabled");
			});

	        /*ACEPTAR EDITAR*/
	        card.on("click","button#aceptar_vehiculo", function(){

	        	var tipo = $("#select_vehiculo_uptade"+element.id).val();
	        	var matricula = $("#matricula_update"+element.id).val();
	        	var marca = $("#marca_update"+element.id).val();
	        	var modelo = $("#modelo_update"+element.id).val();
	        	var fechaFabricacion = App.fechaES_a_fechaUS($("#ffabricacion_update"+element.id).prop("value"));
	        	var idCliente = $("#idCliente_update"+element.id).val();

	        	var vehiculo = {id:element.id, tipo:tipo, matricula:matricula, fechaFabricacion:fechaFabricacion, marca:marca, modelo:modelo, idCliente:idCliente};
	        	//volver a ocultar el botón aceptar
	        	$(this).addClass("invisible");
	        	//volver a deshabilitar los input
	        	$(this).parent().parent().children().attr("disabled", true);

	            events.publish("updateVehiculo", vehiculo);	                            
        	});

	        /*ELIMINAR con confirmación*/
	        card.on("click","button#delete_vehiculo", function(){

	        	var con = confirm("¿Borrar "+element.tipo+" "+element.marca+ " - "+element.modelo+" ?");

				if(con){					
		        	$(this).closest("div.borde_vehiculo").remove();	   

		            events.publish("deleteVehiculo",element.id);
		        }	                            
        	});

        	/*FICHEROS del vehículo pulsado*/
	        card.on("click","button#file_vehiculo", function(){

	        	//le paso la id del vehiculo, para obtener los ficheros de ese vehiculo
		        events.publish("getFicheros",element.id);
		        	                            
        	});

	    });

	   }
				
    }

    return {
    	init: function(){
    		events.subscribe("renderVehiculoModal", renderVehiculoModal);
    	},
    	capturarDatos: capturarDatos
    }
})();

//evento click en botón CONFIRMAR NUEVO vehiculo, en modal vehiculo
$("div#divVehiculo").on('click', 'button#boton_nuevo_vehiculo', function(){	

	var datos = VehiculoView.capturarDatos();

	var vehiculo = Vehiculo.crearVehiculo(datos);

	events.publish("nuevoVehiculo", vehiculo);
});