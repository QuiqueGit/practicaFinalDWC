-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2018 a las 11:42:51
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` tinyint(7) NOT NULL,
  `nombres` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ciudad` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sexo` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fecha_nacimiento` datetime NOT NULL,
  `direccion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `provincia` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fechaAlta` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombres`, `ciudad`, `sexo`, `telefono`, `fecha_nacimiento`, `direccion`, `provincia`, `fechaAlta`) VALUES
(1, 'Carlos Jimeno', 'Valencia', 'H', '961111111', '1958-07-01 00:00:00', 'Av.Peris i valero n35', 'Valencia', '2018-02-08 00:00:00'),
(2, 'Maria DB', 'Madrid', 'M', '963215487', '1978-04-05 00:00:00', 'C/Gran Via n44', 'Madrid', '2018-02-05 00:00:00'),
(3, 'Manolo Garcia', 'Barcelona', 'H', '645214587', '1971-10-14 00:00:00', 'La Rambla', 'Barcelona', '2018-02-05 00:00:00'),
(9, 'Pedro Rodriguez', 'Valencia', 'H', '964521325', '1969-05-05 00:00:00', 'Pl.Espanya', 'Valencia', '2018-02-11 00:00:00'),
(11, 'Test', 'Test', 'H', '11111111', '2018-02-01 00:00:00', 'Test', 'Test', '2018-02-11 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficheros`
--

CREATE TABLE `ficheros` (
  `id` int(11) NOT NULL,
  `tipoFichero` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `id_vehiculo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ficheros`
--

INSERT INTO `ficheros` (`id`, `tipoFichero`, `nombre`, `ruta`, `id_vehiculo`) VALUES
(18, 'Facturas', 'Facturas_vehID6_1518427287837test2.pdf', '../ficheros_subidos/Facturas_vehID6_1518427287837test2.pdf', 6),
(24, 'Contratos', 'Contratos_vehID16_1518428038572test2.pdf', '../ficheros_subidos/Contratos_vehID16_1518428038572test2.pdf', 16),
(31, 'Contratos', 'Contratos_vehID6_1518429384573test2.pdf', '../ficheros_subidos/Contratos_vehID6_1518429384573test2.pdf', 6),
(32, 'Contrato', 'Contrato_vehID37_1518431154525test3.pdf', '../ficheros_subidos/Contrato_vehID37_1518431154525test3.pdf', 37);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `matricula` varchar(20) NOT NULL,
  `fecha_fabricacion` datetime NOT NULL,
  `marca` varchar(55) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `id_cliente` tinyint(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `tipo`, `matricula`, `fecha_fabricacion`, `marca`, `modelo`, `id_cliente`) VALUES
(6, 'Coche', '78541-Y', '1990-07-01 00:00:00', 'Renault', 'Clio Sport', 2),
(16, 'Moto', '998877-T', '2018-02-07 00:00:00', 'Mercedes', 'Benz 500', 3),
(37, 'Coche', 'adsasd', '2018-02-01 00:00:00', 'asddas', 'asdasd', 11);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ficheros`
--
ALTER TABLE `ficheros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_vehiculos` (`id_vehiculo`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cascadeDelete` (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` tinyint(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `ficheros`
--
ALTER TABLE `ficheros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ficheros`
--
ALTER TABLE `ficheros`
  ADD CONSTRAINT `fk_id_vehiculos` FOREIGN KEY (`id_vehiculo`) REFERENCES `vehiculos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `cascadeDelete` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
