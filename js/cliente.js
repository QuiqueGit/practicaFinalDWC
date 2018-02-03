var Cliente = (function() {

	var crearCliente = function(object){

		return {
			id: object.id,
			nombre: object.nombres,
			ciudad: object.ciudad,
			sexo: object.sexo,
			telefono: object.telefono,
			fecha_nacimiento: object.fechaNacimiento
			direccion: object.direccion,
			provincia: object.provincia,
			fechaAlta: object.fechaAlta
		}
	}

	return {
		crearCliente: crearCliente
	}
	
})();
