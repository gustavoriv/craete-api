-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-05-2023 a las 21:39:26
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Biblioteca_`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Reservas`
--

CREATE TABLE `Reservas` (
  `id_reserva` int(11) NOT NULL,
  `Alumno` varchar(240) NOT NULL,
  `Fecha` date NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Reservas`
--

INSERT INTO `Reservas` (`id_reserva`, `Alumno`, `Fecha`, `Estado`) VALUES
(1, 'Batman', '2023-05-02', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Reservas`
--
ALTER TABLE `Reservas`
  ADD PRIMARY KEY (`id_reserva`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Reservas`
--
ALTER TABLE `Reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
