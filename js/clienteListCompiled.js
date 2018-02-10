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
    + "</td>\r\n      <td class=\"direccion\">"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + "</td>\r\n      <td class=\"provincia\">"
    + alias4(((helper = (helper = helpers.provincia || (depth0 != null ? depth0.provincia : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"provincia","hash":{},"data":data}) : helper)))
    + "</td>\r\n      <td class=\"fechaAlta\">"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fechaAlta : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n  		<td><i id='editar'><i class='fas fa-edit fa-2x icono mr-2' data-toggle='modal' data-target='#clienteModal' style='color:orange'></i></i></td>\r\n  		<td><i id='borrar'><i class='fas fa-trash-alt fa-2x icono ml-2 mr-2' style='color:red'></i></i></td>\r\n      <td><i id='mapa_icon'><i class='fas fa-map-marker-alt fa-2x icono ml-2' style='color:blue'></i></i></td>\r\n  	</tr> \r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    <row>    \r\n        <div class=\"col-12 container card border-dark mb-2\">\r\n          <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"card-body text-center\">\r\n            <h5>"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</h5>\r\n            <p>"
    + alias4(((helper = (helper = helpers.direccion || (depth0 != null ? depth0.direccion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direccion","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.ciudad || (depth0 != null ? depth0.ciudad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ciudad","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = helpers.telefono || (depth0 != null ? depth0.telefono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telefono","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fecha_nacimiento : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</p>\r\n            <hr>\r\n            <p>Fecha de alta: "
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.fechaAlta : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</p>\r\n            <i id='editar'><i class='fas fa-edit fa-2x icono mr-2' data-toggle='modal' data-target='#clienteModal' style='color:orange'></i></i>\r\n            <i id='borrar'><i class='fas fa-trash-alt fa-2x icono ml-2 mr-2' style='color:red'></i></i>\r\n            <i id='mapa_icon'><i class='fas fa-map-marker-alt fa-2x icono ml-2' style='color:blue'></i></i>\r\n          </div>\r\n        </div>\r\n    </row>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- TABLA -->\r\n<table id=\"tabla\" class=\"table table-hover mt-2 d-none d-lg-table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Nombre</th>\r\n      <th scope=\"col\">Ciudad</th>\r\n      <th scope=\"col\">Sexo</th>\r\n      <th scope=\"col\">Teléfono</th>\r\n      <th scope=\"col\">F.Nacimiento</th>\r\n      <th scope=\"col\">Dirección</th>\r\n      <th scope=\"col\">Provincia</th>\r\n      <th scope=\"col\">F.Alta</th>\r\n      <th></th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>	\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </tbody>\r\n</table>\r\n\r\n<!-- CARDS -->\r\n<div class=\"container d-lg-none\">\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});
})();