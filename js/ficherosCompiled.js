(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ficheros'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <h6 class=\"text-danger\">Sin ficheros.</h6>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container cardsFicheros\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ficheros : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n        <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"row borde_fichero p-2 mr-1 border border-secondary rounded justify-content-around mb-2\">\r\n\r\n            <label><b><u>Tipo Fichero:</u></b></label>\r\n            <label>"
    + alias4(((helper = (helper = helpers.tipoFichero || (depth0 != null ? depth0.tipoFichero : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tipoFichero","hash":{},"data":data}) : helper)))
    + "</label>                                   \r\n            <label><b><u>Nombre:</u></b></label>\r\n            <label>"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</label>\r\n            <button type=\"button\" id=\"bajar_fichero\" class=\"btn btn-success btn-sm\"><i class=\"fas fa-download\"></i></button>            \r\n            <button type=\"button\" id=\"delete_fichero\" class=\"btn btn-danger btn-sm\"><i class=\"fas fa-trash\"></i></button>\r\n            \r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <input type=\"hidden\" id=\"idVehiculo\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ficheros : depth0)) != null ? stack1.idSinFichero : stack1), depth0))
    + "\"> \r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <input type=\"hidden\" id=\"idVehiculo\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.ficheros : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.idVehiculo : stack1), depth0))
    + "\">                                \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"container contFicheros\">\r\n    \r\n    <h3>Ficheros del vehiculo "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.ficheros : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.nombre : stack1), depth0))
    + "</h3>\r\n    \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.noFicheros : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n<hr>\r\n    \r\n    <h3>Subir nuevo fichero...</h3>\r\n\r\n    <form enctype=\"multipart/form-data\" id=\"formUploadAjax\" method=\"POST\">\r\n        <label>Tipo Fichero:</label>\r\n        <select class=\"custom-select selectorr col-3\" name=\"select_vehiculo_file\" id=\"select_vehiculo_file\">\r\n            <option value=\"Facturas\" selected=\"\">Facturas</option>\r\n            <option value=\"Contratos\">Contratos</option>\r\n            <option value=\"Seguros\">Seguros</option>                                \r\n        </select>\r\n        <br>Nombre: <input type=\"text\" id=\"nombre\" name=\"nombre\" value=\"test\">\r\n        <input  type=\"file\" id=\"archivo1\" name=\"archivo1\"/> \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.noFicheros : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "        <input type=\"submit\" id=\"submit\" value=\"Subir archivo\">\r\n    </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true});
})();