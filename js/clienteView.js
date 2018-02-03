var ClienteView = (function () {	

	//funcion que obtiene la fecha actual, para dar de alta un cliente
	function fechaActual(){
		var hoy = new Date();
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1; //Enero empieza en 0
		var yyyy = hoy.getFullYear();

		if(dd<10) {
		    dd = '0' + dd;
		} 

		if(mm<10) {
		    mm = '0' + mm;
		} 

		hoy = yyyy + '-' + mm + '-' + dd;

		return hoy;
	}

	//funcion que captura los datos de los inputs del modal y devuelve un objeto plano
	function capturarDatos(){

		var nombre = $('#nombre_input').val();
		var ciudad = $('#ciudad_input').val();
		var sexo = $('input[name=sexo]:checked', '#form_registro').val();
		var telefono = $('#telefono_input').val();
		var fecha_nacimiento = $('.datepicker').val();
		var direccion = $('#direccion_input').val();
		var provincia = $('#provincia_input').val();		

		return {
			nombres: nombre,
			ciudad: ciudad,
			sexo: sexo,
			telefono: telefono,
			fechaNacimiento: fecha_nacimiento,
			direccion: direccion,
			provincia: provincia
		}
	}


	function renderModal(cliente){

		var male;

		cliente.sexo == "H" ? male = true : male = false;

		var parametros;

		cliente.id != 0 ?
		parametros = {fechaAlta:true,sexo:male, titulo:"Editar datos", accion: "Editar", cliente: cliente}: parametros = {titulo:"Nuevo Cliente", accion: "Registrar", cliente: cliente}		

		var modalNuevoCompiled = Handlebars.templates.modal(parametros);

		$('div.divModal').html(modalNuevoCompiled);

		$('.datepicker').datepicker({dateFormat: 'yy-mm-dd', changeYear: true, changeMonth: true, yearRange: "1940:2000"});
	}

	return {
		init: function(){			
			events.subscribe("renderModal", renderModal);
		},
		capturarDatos: capturarDatos,
		fechaActual: fechaActual 
	}
	
})();

ClienteView.init();

//***EVENTOS***//

//evento click botón REGISTRAR en Modal Nuevo Cliente, con id='boton_Registrar'
$("div.divModal").on('click', 'button#boton_Registrar', function(){	

	//comprobar si los input tienen valor, no puede haber ninguno vacío
	if ($('#nombre_input').val() !== "" && $('#ciudad_input').val() !== "" && $('#telefono_input').val() !== "" && $('#datepicker').val() !== ""){

		var cliente = ClienteView.capturarDatos();
		//añadimos al objeto el atributo fechaAlta, con la fecha actual
		cliente.fechaAlta = ClienteView.fechaActual();

		events.publish("nuevoCliente", cliente);			
	}

});

//evento click botón EDITAR en Modal Editar, con id='boton_Editar'
$("div.divModal").on('click', 'button#boton_Editar', function(){

	//obtener la id del cliente, apuntada en la id del tr, necesaria para la actualizacion
	var id = $('button#boton_Editar').attr('data-id');

	//comprobar si los input tienen valor, no puede haber ninguno vacío
	if ($('#nombre_input').val() !== "" && $('#ciudad_input').val() !== "" && $('#telefono_input').val() !== "" && $('#datepicker').val() !== ""){

		var cliente = ClienteView.capturarDatos();
		cliente.id = id;
		cliente.fechaAlta = $('#fechaAlta_input').val();

		events.publish("editarCliente", cliente);			
	}

});