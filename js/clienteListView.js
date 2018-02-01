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

	var clienteVacio = {id:"",nombre:"",ciudad:"",sexo:"",telefono:"",fecha_nacimiento:""}

	events.publish('renderModal', clienteVacio);	
});

//evento icono EDITAR en Tabla Clientes
$("div.content").on('click','i#editar', function(){

	//obtener la id del cliente, apuntada en la id del tr
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

	    //objeto plano con los datos obtenidos
		cliente = {id:id,nombre:nombre,ciudad:ciudad,sexo:sexo,telefono:telefono,fecha_nacimiento:fnac};
	 });

	events.publish('renderModal', cliente);
});

//evento click icono ELIMINAR en Tabla Clientes
$("div.content").on('click','i#borrar',function(){

	var con = confirm("¿Confirmación borrar?");

	if (con) {

		var id = $(this).closest('tr').attr('id');

		var cliente = {id:id};

		events.publish('borrarCliente', cliente);
	}	

});