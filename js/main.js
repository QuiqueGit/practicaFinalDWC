//cargar todos los init() e iniciar la consulta de clientes cuando el document esté listo
$(document).ready(function() {
	ClienteView.init();
    ClienteList.init();
    ClienteListView.init();
    Mapa.init();
    MapaView.init();
    Vehiculo.init();
    VehiculoView.init();
    ClienteList.consultarClientes();
});


//URL de la API
var App = (function() {

	var url = "http://localhost/practicaFinalDWC/API/";

	// función que pasa fecha de formato 02/12/2015 a 2015-12-02, para realizar la actualización la base de datos requiere yyyy-mm-dd
	function fechaES_a_fechaUS(stringFecha){

		var dia = stringFecha.substring(0,2);
		var mes = stringFecha.substring(3,5);
		var year = stringFecha.substring(6,10);

		return year + "-" + mes + "-" + dia;
	}

	return{
		url: url,
		fechaES_a_fechaUS: fechaES_a_fechaUS
	}
	
})();

// helper Handlebars formato fecha de 2015-12-02 00:00:00 que se recibe de la base de datos a 02/12/2015 que hay que mostrar en la tabla al renderizar
Handlebars.registerHelper("formatDate", function(stringDate){

	var year = stringDate.substring(0,4);
	var mes = stringDate.substring(5,7);
	var dia = stringDate.substring(8,10);
	//otro método con split y join
	//stringDate.split(' ')[0].split('-').reverse().join('/');

	return dia + "/" + mes + "/" + year;
});

// helper Handlebars, cuando se hace la petición de los vehículos, saber cual de los select 'tipo' poner la propiedad 'selected'
Handlebars.registerHelper("equals", function(tipo, option){

	if (tipo === option){
		return "selected";
	}	
});