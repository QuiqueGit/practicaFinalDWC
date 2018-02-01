//URL de la API
var App = (function() {

	var url = "http://localhost/API/";

	return{
		url: url
	}
	
})();

// helper Handlebars formato fecha de 2015-12-02 00:00:00 que se recibe de la base de datos a 02/12/2015 que hay que mostrar en la tabla al renderizar
Handlebars.registerHelper("formatDate", function(stringDate){

	var year = stringDate.substring(0,4);
	var mes = stringDate.substring(5,7);
	var dia = stringDate.substring(8,10);

	return dia + "/" + mes + "/" + year;
});


