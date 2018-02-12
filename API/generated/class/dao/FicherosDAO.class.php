<?php
/**
 * Intreface DAO
 *
 * @author: http://phpdao.com
 * @date: 2018-02-11 21:29
 */
interface FicherosDAO{

	/**
	 * Get Domain object by primry key
	 *
	 * @param String $id primary key
	 * @Return Ficheros 
	 */
	public function load($id);

	/**
	 * Get all records from table
	 */
	public function queryAll();
	
	/**
	 * Get all records from table ordered by field
	 * @Param $orderColumn column name
	 */
	public function queryAllOrderBy($orderColumn);
	
	/**
 	 * Delete record from table
 	 * @param fichero primary key
 	 */
	public function delete($id);
	
	/**
 	 * Insert record to table
 	 *
 	 * @param Ficheros fichero
 	 */
	public function insert($fichero);
	
	/**
 	 * Update record in table
 	 *
 	 * @param Ficheros fichero
 	 */
	public function update($fichero);	

	/**
	 * Delete all rows
	 */
	public function clean();

	public function queryByTipoFichero($value);

	public function queryByNombre($value);

	public function queryByRuta($value);

	public function queryByIdVehiculo($value);


	public function deleteByTipoFichero($value);

	public function deleteByNombre($value);

	public function deleteByRuta($value);

	public function deleteByIdVehiculo($value);


}
?>