var ClienteView = (function () {	

	//funcion que captura los datos de los inputs del modal y devuelve un objeto plano
	function capturarDatos(){

		var nombre = $('#nombre_input').val();
		var ciudad = $('#ciudad_input').val();
		var sexo = $('input[name=sexo]:checked', '#form_registro').val();
		var telefono = $('#telefono_input').val();
		var fecha_nacimiento = $('#datepicker').val();

		return {
			nombres: nombre,
			ciudad: ciudad,
			sexo: sexo,
			telefono: telefono,
			fechaNacimiento: fecha_nacimiento
		}
	}
	

	function renderModal(cliente){

		var male;

		cliente.sexo == "H" ? male = true : male = false;

		var parametros;

		cliente.id != 0 ?
		parametros = {sexo:male, titulo:"Editar datos", accion: "Editar", cliente: cliente}: parametros = {titulo:"Nuevo Cliente", accion: "Añadir", cliente: cliente}		

		var modalNuevoCompiled = Handlebars.templates.modal(parametros);

		$('div.divModal').html(modalNuevoCompiled);

		$('#datepicker').datepicker({dateFormat: 'yy-mm-dd', changeYear: true, changeMonth: true, yearRange: "1940:2000"});
		
	}

	return {
		init: function(){			
			events.subscribe("renderModal", renderModal);
		},
		capturarDatos: capturarDatos
	}
	
})();

ClienteView.init();

//***EVENTOS***//

//evento click botón REGISTRAR en Modal Nuevo Cliente, con id='boton_Registrar'
$("div.divModal").on('click', 'button#boton_Añadir', function(){	

	//comprobar si los input tienen valor, no puede haber ninguno vacío
	if ($('#nombre_input').val() && $('#ciudad_input').val() && $('#telefono_input').val() && $('#datepicker').val()){

		var cliente = ClienteView.capturarDatos();

		events.publish("nuevoCliente", cliente);			
	}

});

//evento click botón EDITAR en Modal Editar, con id='boton_Editar'
$("div.divModal").on('click', 'button#boton_Editar', function(){

	//obtener la id del cliente, apuntada en la id del tr, necesaria para la actualizacion
	var id = $('button#boton_Editar').attr('data-id');

	//comprobar si los input tienen valor, no puede haber ninguno vacío
	if ($('#nombre_input').val() && $('#ciudad_input').val() && $('#telefono_input').val() && $('#datepicker').val()){

		var cliente = ClienteView.capturarDatos();
		cliente.id = id;

		events.publish("editarCliente", cliente);			
	}

});