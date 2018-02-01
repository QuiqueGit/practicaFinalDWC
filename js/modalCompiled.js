(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <input type=\"radio\" name=\"sexo\" value=\"H\" checked> Hombre<br>\r\n                        <input type=\"radio\" name=\"sexo\" value=\"M\"> Mujer\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <input type=\"radio\" name=\"sexo\" value=\"H\"> Hombre<br>\r\n                        <input type=\"radio\" name=\"sexo\" value=\"M\" checked> Mujer                        \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!-- Modal -->\r\n<div class=\"modal fade\" id=\"clienteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"clienteModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"clienteModalLabel\">"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data}) : helper)))
    + "</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <!--Formulario-->\r\n                <form id=\"form_registro\">\r\n                    <div class=\"form-group\">\r\n                        <label>Nombre</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.nombre : stack1), depth0))
    + "\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Ciudad</label>\r\n                        <input type=\"text\" class=\"form-control text-muted\" id=\"ciudad_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.ciudad : stack1), depth0))
    + "\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <small>Sexo</small>\r\n                        <br>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sexo : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "                        <br>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Teléfono</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"telefono_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.telefono : stack1), depth0))
    + "\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>FechaNacimiento</label>\r\n                        <input type=\"text\" id=\"datepicker\" class=\"form-control\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.fecha_nacimiento : stack1), depth0))
    + "\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\r\n                        <input id=\"boton_"
    + alias4(((helper = (helper = helpers.accion || (depth0 != null ? depth0.accion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accion","hash":{},"data":data}) : helper)))
    + "\" data-id='"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.id : stack1), depth0))
    + "' data-dismiss=\"modal\" type=\"submit\" class=\"btn btn-info\" value=\""
    + alias4(((helper = (helper = helpers.accion || (depth0 != null ? depth0.accion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accion","hash":{},"data":data}) : helper)))
    + "\"></input>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();