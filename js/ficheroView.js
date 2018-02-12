var FicheroView = (function() {

    //funcion para renderizar los ficheros del vehiculo pulsado en el div collapse
    function renderFicheros(array_ficheros) {

        var noFicheros;
        //la API devuelve la id del vehiculo sin ficheros si no tiene, o el array de todos los ficheros que tiene
        array_ficheros.idSinFichero ? noFicheros = true : noFicheros = false;

        var datos = { noFicheros: noFicheros, ficheros: array_ficheros };

        var ficherosCompiled = Handlebars.templates.ficheros(datos);

        $('#divFicheros').html(ficherosCompiled);

        //$('.modal-backdrop').remove(); //elimina el fondo del anterior modal si hubiese

        //$('#modalVehiculo').modal('show');

        if (!array_ficheros.idSinFichero) {

        	var ficheros = $('div.cardsFicheros');

            array_ficheros.forEach(function(element, index) {

                var boton = ficheros.find('div.borde_fichero').eq(index);

                /*ELIMINAR FICHERO*/
                boton.on("click", "button#delete_fichero", function() {

                    var con = confirm("¿Borrar fichero " + element.tipoFichero + " " + element.nombre + " ?");

                    if (con) {
                        $(this).closest("div.borde_fichero").remove();                        

                        events.publish("deleteFichero", element.id);
                    }
                });

            });
        }

    }

    return {
        init: function() {
            events.subscribe("renderFicheros", renderFicheros);
        }
    }
})();

//evento SUBMIT nuevo fichero en form vehiculo
$(document).on("submit", "form#formUploadAjax", function(e){

    e.preventDefault(); //evita que recarge la página

    var idVehiculo = $("#idVehiculo").val();
    var tipoFichero = $("#select_vehiculo_file").val();
    var nombreFichero = tipoFichero + "_vehID" + idVehiculo + "_" + Date.now();

    var formData = new FormData(document.getElementById("formUploadAjax"));
    //formData.append("dato", "valor");
    formData.append($(this).attr("name"), $("#archivo1")[0].files[0]);
    formData.append("idVehiculo", idVehiculo);
    formData.append("tipoFichero", tipoFichero);
    formData.append("nombreFichero", nombreFichero);
    
    events.publish("nuevoFichero", formData);
});
