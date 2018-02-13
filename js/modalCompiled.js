(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div>            \r\n                <input type=\"radio\" class=\"with-gap\" name=\"sexo\" id=\"hombre\" value=\"H\" checked>\r\n                <label for=\"hombre\">Hombre</label>\r\n            </div>\r\n                          \r\n            <div>\r\n                <input type=\"radio\" class=\"with-gap\" name=\"sexo\" id=\"mujer\" value=\"M\">\r\n                <label for=\"mujer\">Mujer</label>\r\n            </div>\r\n                \r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <div>            \r\n                <input type=\"radio\" class=\"with-gap\" name=\"sexo\" id=\"hombre\" value=\"H\">\r\n                <label for=\"hombre\">Hombre</label>\r\n            </div>\r\n                          \r\n            <div>\r\n                <input type=\"radio\" class=\"with-gap\" name=\"sexo\" id=\"mujer\" value=\"M\" checked>\r\n                <label for=\"mujer\">Mujer</label>\r\n            </div>                                        \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!-- Modal -->\r\n\r\n<div class=\"modal-content\">\r\n\r\n    <h5>"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data}) : helper)))
    + "</h5>       \r\n\r\n    <!--Formulario-->\r\n    <form id=\"form_registro\">\r\n        <div class=\"input-field\">\r\n            <label for=\"nombre_input\">Nombre</label>\r\n            <input type=\"text\" class=\"validate\" id=\"nombre_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.nombre : stack1), depth0))
    + "\" required>\r\n        </div>\r\n        <div class=\"input-field\">\r\n            <label for=\"ciudad_input\">Ciudad</label>\r\n            <input type=\"text\" class=\"validate\" id=\"ciudad_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.ciudad : stack1), depth0))
    + "\" required>\r\n        </div>\r\n        <div>\r\n            <span>Sexo</span>\r\n            <br>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sexo : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            \r\n            <br>\r\n        </div>\r\n        <div class=\"input-field\">\r\n            <label for=\"telefono_input\">Teléfono</label>\r\n            <input type=\"text\" class=\"validate\" id=\"telefono_input\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.telefono : stack1), depth0))
    + "\" required>\r\n        </div>\r\n        <div class=\"datepicker\">\r\n            <label for=\"nombre_input\">FechaNacimiento</label>\r\n            <input type=\"text\" id=\"datepicker\" class=\"validate\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.fecha_nacimiento : stack1), depth0))
    + "\" required>\r\n        </div>\r\n        <div class=\"input-field\">            \r\n            <button type=\"button\" class=\"modal-action modal-close btn\" id=\"boton_"
    + alias4(((helper = (helper = helpers.accion || (depth0 != null ? depth0.accion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accion","hash":{},"data":data}) : helper)))
    + "\" data-id='"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.id : stack1), depth0))
    + "' data-dismiss=\"modal\">"
    + alias4(((helper = (helper = helpers.accion || (depth0 != null ? depth0.accion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accion","hash":{},"data":data}) : helper)))
    + "</button>\r\n            <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-red btn red lighten-2\">Cancel</a>\r\n        </div>\r\n    </form>\r\n    \r\n</div>\r\n\r\n<script type=\"text/javascript\">Materialize.updateTextFields()</script>\r\n";
},"useData":true});
})();