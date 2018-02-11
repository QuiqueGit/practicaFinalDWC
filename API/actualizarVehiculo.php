<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

//include all DAO files
require_once('include_dao.php');
//new Vehiculo
$vehiculo=new Vehiculo();	
$vehiculo->id = htmlspecialchars(trim($_POST['id']));
$vehiculo->tipo = htmlspecialchars(trim($_POST['tipo']));
$vehiculo->matricula = htmlspecialchars(trim($_POST['matricula']));
$vehiculo->fechaFabricacion = htmlspecialchars(trim($_POST['fechaFabricacion']));
$vehiculo->marca = htmlspecialchars(trim($_POST['marca']));
$vehiculo->modelo = htmlspecialchars(trim($_POST['modelo']));
$vehiculo->idCliente = htmlspecialchars(trim($_POST['idCliente']));

//start new transaction
$transaction = new Transaction();
//obtain vehiculosDAOFactory
$VehiculosDAO=DAOFactory::getVehiculosDAO();
//update vehiculo
$update=$VehiculosDAO->update($vehiculo);
//commit transaction
$transaction->commit();

if($update>0){
	echo json_encode(array("ok" => 1), JSON_FORCE_OBJECT);
}else{
	echo json_encode(array("fail" => 0), JSON_FORCE_OBJECT);
} 
?>