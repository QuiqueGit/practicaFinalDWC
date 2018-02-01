(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clienteList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n  	<tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">  	\r\n  		<td class=\"nombre\">"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</td>\r\n  		<td class=\"ciudad\">"
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</td>\r\n  		<td class=\"sexo\">"
    + alias4(((helper = (helper = helpers.sexo || (depth0 != null ? depth0.sexo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sexo","hash":{},"data":data}) : helper)))
    + "</td>\r\n  		<td class=\"telefono\">"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</td>\r\n  		<td class=\"fnac\">"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fecha_nacimiento : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n  		<td><i id='editar' class='fa fa-pencil fa-2x icono' data-toggle='modal' data-target='#clienteModal' style='color:orange'></i></td>\r\n  		<td><i id='borrar' class='fa fa-trash fa-2x icono' style='color:red'></i></td>\r\n  	</tr> \r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Tabla -->\r\n<table id=\"tabla\" class=\"table table-hover mt-2\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Nombre</th>\r\n      <th scope=\"col\">Ciudad</th>\r\n      <th scope=\"col\">Sexo</th>\r\n      <th scope=\"col\">Teléfono</th>\r\n      <th scope=\"col\">FechaNacimiento</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>	\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </tbody>\r\n</table>";
},"useData":true});
})();