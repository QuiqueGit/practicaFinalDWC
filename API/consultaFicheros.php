<?php
	//include all DAO files
	require_once('include_dao.php');
	//obtener id cliente
	$id = htmlspecialchars(trim($_POST['idVehiculo']));
	//start new transaction
	$transaction = new Transaction();
	//obtain vehiculoDAOFactory
	$FicherosDAO=DAOFactory::getFicherosDAO();
	//obtain vehiculos
	$ficheros=$FicherosDAO->queryByIdVehiculo($id);
	//commit transaction
	$transaction->commit();
	if (empty($ficheros)){
		//si no tiene ficheros, devuelve la id del vehiculo sin ficheros
		echo json_encode(array("idSinFichero"=>$id), JSON_FORCE_OBJECT);
	}else{		
		//devuelve los ficheros asociados a la id del vehiculo
    	echo json_encode($ficheros);
	} 
?>