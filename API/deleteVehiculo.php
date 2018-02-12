<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

$vehiculo_id=$_POST['id'];
//include all DAO files
require_once('include_dao.php');		
//start new transaction
$transaction = new Transaction();
//obtain vehiculoDAOFactory
$VehiculosDAO=DAOFactory::getVehiculosDAO();

$update=$VehiculosDAO->delete($vehiculo_id);
//commit transaction
$transaction->commit();

if($update>0){
	echo json_encode(array("ok" => 1), JSON_FORCE_OBJECT);
}else{
	echo json_encode(array("fail" => 0), JSON_FORCE_OBJECT);
}
?>