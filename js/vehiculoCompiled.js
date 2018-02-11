(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['vehiculo'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                    	<h3>Sin vehiculos.</h3>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"row cards d-flex justify-content-sm-center\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.vehiculos : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	                        <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"borde_vehiculo p-2 mr-1 border border-secondary\">\r\n	                            <label>Tipo:</label><br>\r\n	                            <select class=\"custom-select selectorr\" id=\"select_vehiculo_uptade"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" disabled=\"\">                        	\r\n	                                <option value=\"Coche\" "
    + alias4((helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0.tipo : depth0),"Coche",{"name":"equals","hash":{},"data":data}))
    + ">Coche</option>\r\n	                                <option value=\"Moto\" "
    + alias4((helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0.tipo : depth0),"Moto",{"name":"equals","hash":{},"data":data}))
    + ">Moto</option>\r\n	                                <option value=\"Camion\" "
    + alias4((helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0.tipo : depth0),"Camion",{"name":"equals","hash":{},"data":data}))
    + ">Camión</option>\r\n	                                <option value=\"Furgoneta\" "
    + alias4((helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0.tipo : depth0),"Furgoneta",{"name":"equals","hash":{},"data":data}))
    + ">Furgoneta</option>\r\n                       			</select><br>                       			\r\n	                            <label>Matricula:</label><br>\r\n	                            <input type=\"text\" id=\"matricula_update"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.matricula || (depth0 != null ? depth0.matricula : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"matricula","hash":{},"data":data}) : helper)))
    + "\" disabled=\"\"><br>\r\n	                            <label>Marca:</label><br>\r\n	                            <input type=\"text\" id=\"marca_update"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.marca || (depth0 != null ? depth0.marca : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marca","hash":{},"data":data}) : helper)))
    + "\" disabled=\"\"><br>\r\n	                            <label>Modelo:</label><br>\r\n	                            <input type=\"text\" id=\"modelo_update"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.modelo || (depth0 != null ? depth0.modelo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelo","hash":{},"data":data}) : helper)))
    + "\" disabled=\"\"><br>\r\n	                            <label>F.Fabricación:</label><br>\r\n	                            <input type=\"text\" id=\"ffabricacion_update"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fechaFabricacion : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "\" disabled=\"\"><br>\r\n	                            <input type=\"hidden\" id=\"idCliente_update"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.idCliente || (depth0 != null ? depth0.idCliente : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idCliente","hash":{},"data":data}) : helper)))
    + "\"><br>\r\n	                            <div class=\"row justify-content-around botones\">\r\n		                            <button type=\"button\" id=\"update_vehiculo\" class=\"btn btn-warning btn-sm\"><i class=\"fas fa-edit\"></i></button>\r\n		                            <button type=\"button\" id=\"aceptar_vehiculo\" class=\"btn btn-info btn-sm invisible\">Aceptar</button>\r\n		                            <button type=\"button\" id=\"delete_vehiculo\" class=\"btn btn-danger btn-sm\"><i class=\"fas fa-trash\"></i></button>\r\n	                        	</div>\r\n	                        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            	<input type=\"hidden\" id=\"idCliente\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.vehiculos : depth0)) != null ? stack1.idSinVehiculo : stack1), depth0))
    + "\"> \r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            	<input type=\"hidden\" id=\"idCliente\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.vehiculos : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.idCliente : stack1), depth0))
    + "\">                            	\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal fade\" id=\"modalVehiculo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalVehiculoLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Vehículos</h5><br>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n\r\n                <div id=\"container contVehiculos\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.noVehiculos : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\r\n\r\n                <hr>\r\n\r\n                <div id=\"formVehiculo\">\r\n                	<h3>Registrar un nuevo vehículo.</h3>\r\n                    <!--Formulario-->\r\n                    <form id=\"form_registro\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tipo</label>\r\n                            <select class=\"custom-select col-lg-3\" id=\"select_vehiculo\">\r\n                                <option value=\"Coche\" selected=\"\">Coche</option>\r\n                                <option value=\"Moto\">Moto</option>\r\n                                <option value=\"Camion\">Camión</option>\r\n                                <option value=\"Furgoneta\">Furgoneta</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Matrícula</label>\r\n                            <input type=\"text\" class=\"form-control text-muted\" id=\"matricula_input\" value=\"\">\r\n                        </div>\r\n                        <row class='no-gutters d-flex'>\r\n                            <div class=\"form-group col-6\">\r\n                                <label>Marca</label>\r\n                                <input type=\"text\" class=\"form-control text-muted\" id=\"marca_input\" value=\"\">\r\n                            </div>\r\n                            <div class=\"form-group col-5 offset-1\">\r\n                                <label>Modelo</label>\r\n                                <input type=\"text\" class=\"form-control text-muted\" id=\"modelo_input\" value=\"\">\r\n                            </div>\r\n                        </row>\r\n                        <div class=\"form-group\">\r\n                            <label>FechaFabricación</label>\r\n                            <input type=\"text\" class=\"form-control datepicker_vehiculo\" value=\"\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\r\n                            <button type=\"button\" class=\"btn btn-info\" id=\"boton_nuevo_vehiculo\" data-id='' data-dismiss=\"modal\">Registrar Vehículo</button>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.noVehiculos : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </div>\r\n                    </form>\r\n                    <!--FIN Formulario-->\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();