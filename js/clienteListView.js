var ClienteListView = (function() {

	// función que pasa fecha de formato 02/12/2015 a 2015-12-02, para realizar la actualización la base de datos requiere yyyy-mm-dd
	function fechaES_a_fechaUS(stringFecha){

		var dia = stringFecha.substring(0,2);
		var mes = stringFecha.substring(3,5);
		var year = stringFecha.substring(6,10);

		return year + "-" + mes + "-" + dia;
	}	

	function consultar(array_clientes){

		var htmlCompiled = Handlebars.templates.clienteList(array_clientes);		

		$('div.content').html(htmlCompiled);				
	}


	function error(){

		$('div.content').html("ERROR. COMPROBAR CONEXION");
	}



	return {
		init: function(){			
			events.subscribe("consultar", consultar);
			events.subscribe("error", error);
		},
		fechaES_a_fechaUS: fechaES_a_fechaUS
	}
	
})();

ClienteListView.init();

ClienteList.consultarClientes();


//***EVENTOS***//

//evento icono de AÑADIR cliente
$("i#nuevo").click(function(){

	var clienteVacio = {id:"",nombre:"",ciudad:"",sexo:"",telefono:"",fecha_nacimiento:"",direccion:"",provincia:""}

	events.publish('renderModal', clienteVacio);	
});

//evento icono EDITAR en Tabla Clientes
$("div.content").on('click','i#editar', function(){

	if($("#tabla").is(":visible")) {
		//Si la tabla es visible, el this es el icono en la tabla
		//obtener la id del cliente, apuntada en la id del tr, el tr más cercano al icono
		var id = $(this).closest('tr').attr('id');

		//objeto plano vacío vacío
		var cliente = {}

		//recorrer los td del tr más cercano al icono editar, cogiendo sus valores con html()
		$(this).closest('tr').each(function() {

		    var nombre = $(this).find(".nombre").html();
		    var ciudad = $(this).find(".ciudad").html(); 
		    var sexo = $(this).find(".sexo").html(); 
		    var telefono = $(this).find(".telefono").html(); 
		    //para la fecha necesito cambiar el formato de entrada en la base de datos a yyyy-mm-dd, entonces creo una función que pasa de formato
		    // 02/12/2015 a 2015-12-02, para así asegurarme de tener el formato correcto, cambie de fecha o no al actualizar
		    var fnac = ClienteListView.fechaES_a_fechaUS($(this).find(".fnac").html());
		    var direccion = $(this).find(".direccion").html();
		    var provincia = $(this).find(".provincia").html();
		    var fechaAlta = ClienteListView.fechaES_a_fechaUS($(this).find(".fechaAlta").html());

		    //objeto plano con los datos obtenidos
			cliente = {id:id,nombre:nombre,ciudad:ciudad,sexo:sexo,telefono:telefono,fecha_nacimiento:fnac,direccion:direccion,provincia:provincia,fechaAlta:fechaAlta};
		 });

		events.publish('renderModal', cliente);
    
	}else{
		//Si la tabla está OCULTA, entonces salen CARDS y el this se pierde, entonces...
		//Capturamos la id del div padre del icono, que se le asigna a la vez en la plantilla handlebars, de este modo, tabla y cards tienen las mismas ids...
		var indice = $(this).parent().attr('id');
		//Buscamos en los tr de la tabla oculta, la id capturada
		var tr = $('tr#'+indice);
		//Ahora sólo queda asignar a variables, los valores de los td, construir un objeto plano, y enviarlo por el publish a renderizar el edit
		var id = $(tr).attr('id');
		var nombre = $(tr).find(".nombre").html();
	    var ciudad = $(tr).find(".ciudad").html(); 
	    var sexo = $(tr).find(".sexo").html(); 
	    var telefono = $(tr).find(".telefono").html(); 
	    var fnac = ClienteListView.fechaES_a_fechaUS($(tr).find(".fnac").html());
	    var direccion = $(tr).find(".direccion").html();
	    var provincia = $(tr).find(".provincia").html();
	    var fechaAlta = ClienteListView.fechaES_a_fechaUS($(tr).find(".fechaAlta").html());

	    cliente = {id:id,nombre:nombre,ciudad:ciudad,sexo:sexo,telefono:telefono,fecha_nacimiento:fnac,direccion:direccion,provincia:provincia,fechaAlta:fechaAlta};

	    events.publish('renderModal', cliente);
	}

	
});

//evento click icono ELIMINAR en Tabla Clientes
$("div.content").on('click','i#borrar',function(){

	var id;

	var con = confirm("¿Confirmación borrar?");

	if (con) {

		$("#tabla").is(":visible") ? id = $(this).closest('tr').attr('id') : id = $(this).parent().attr('id');
		
		var cliente = {id:id};

		events.publish('borrarCliente', cliente);
	}	

});