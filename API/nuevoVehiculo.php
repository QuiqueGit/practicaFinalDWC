<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");

//include all DAO files
require_once('include_dao.php');
//new vehiculo
$vehiculo=new Vehiculo();	
$vehiculo->tipo = htmlspecialchars(trim($_POST['tipo']));
$vehiculo->matricula = htmlspecialchars(trim($_POST['matricula']));
$vehiculo->fechaFabricacion = htmlspecialchars(trim($_POST['fechaFabricacion']));
$vehiculo->marca = htmlspecialchars(trim($_POST['marca']));
$vehiculo->modelo = htmlspecialchars(trim($_POST['modelo']));
$vehiculo->idCliente = htmlspecialchars(trim($_POST['idCliente']));

//start new transaction
$transaction = new Transaction();
//obtain clienteDAOFactory
$VehiculosDAO=DAOFactory::getVehiculosDAO();
//insert cliente
$id=$VehiculosDAO->insert($vehiculo);
//commit transaction
$transaction->commit();

if ($id >0){
	echo json_encode(array("id" => $id), JSON_FORCE_OBJECT);
}else{
	echo json_encode(array("error"=>"Nuevo:Se produjo un error. Intente más tarde"), JSON_FORCE_OBJECT);
} 

?>