<?php 
//comprobamos si se ha pulsado el botón 'submit' del form
//if (isset($_POST["submit"])) {		

	//comprobamos si se ha subido el archivo correctamente al directorio temporal
	if (is_uploaded_file($_FILES["archivo1"]["tmp_name"])) {
		//seteamos la url de destino para las fotos
		$destino = "../ficheros_subidos/";
		//seteamos el nombre del fichero
		$nombreFichero = $_FILES["archivo1"]["name"];
		//ruta completa, url destino + nombre del fichero
		$nombreCompleto = $destino . $nombreFichero;

		//comprobamos si el directorio existe...
		if (is_dir($destino)) {
			
			//asignamos un id único para cada foto, no pueden haber nombres iguales
			//$idUnico = time();
			//seteamos el nombre del fichero con el id único al principio
			//$nombreFichero = $idUnico . "-" . $nombreFichero;
			//ruta completa, url + nuevo nombre con id única
			//$nombreCompleto = $destino.$nombreFichero;

			//mover el fichero subido de la carpeta temporal, a la ruta seteada
			move_uploaded_file($_FILES["archivo1"]["tmp_name"], $nombreCompleto);

			//UNA VEZ SUBIDO Y MOVIDO EL FICHERO, SE INSERTA EN LA BASE DE DATOS

			//include all DAO files
			require_once('include_dao.php');
			//new fichero
			$fichero=new Fichero();	
			$fichero->tipoFichero = htmlspecialchars(trim($_POST['tipoFichero']));
			$fichero->nombre = htmlspecialchars(trim($_POST['nombreFichero']));
			$fichero->ruta = $destino . htmlspecialchars(trim($_POST['nombreFichero'])) . $nombreFichero;
			$fichero->idVehiculo = htmlspecialchars(trim($_POST['idVehiculo']));

			//start new transaction
			$transaction = new Transaction();
			//obtain clienteDAOFactory
			$FicherosDAO=DAOFactory::getFicherosDAO();
			//insert cliente
			$id=$FicherosDAO->insert($fichero);
			//commit transaction
			$transaction->commit();

			if ($id >0){
				echo json_encode(array("id" => $id), JSON_FORCE_OBJECT);
			}else{
				echo json_encode(array("error"=>"Nuevo:Se produjo un error. Intente más tarde"), JSON_FORCE_OBJECT);
			}
			//echo json_encode(array("exito" => $nombreCompleto), JSON_FORCE_OBJECT);
		}else{
			echo json_encode(array("error" => "directorio no encontrado"), JSON_FORCE_OBJECT);			
		}	
	}else{
		echo json_encode(array("error_upload" => "No se ha podido subir el fichero."), JSON_FORCE_OBJECT);
	}		

//}