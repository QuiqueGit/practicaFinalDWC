<?php
	//include all DAO files
	require_once('include_dao.php');
	//obtener id cliente
	$id = htmlspecialchars(trim($_POST['id_cliente']));
	//start new transaction
	$transaction = new Transaction();
	//obtain vehiculoDAOFactory
	$VehiculosDAO=DAOFactory::getVehiculosDAO();
	//obtain vehiculos
	$vehiculos=$VehiculosDAO->queryByIdCliente($id);
	//commit transaction
	$transaction->commit();
	if (empty($vehiculos)){
		//si no tiene vehiculos, devuelve la id del cliente sin vehiculos
		echo json_encode(array("idSinVehiculo"=>$id), JSON_FORCE_OBJECT);
	}else{		
		//devuelve los vehiculos asociados a la id del cliente
    	echo json_encode($vehiculos);
	} 
?>