-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2025 at 12:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'Tarroza', '$2b$10$26iU9SLefxicgMSJF2U/FuR/UniHLZxYrdgJ8Tev1owGVDOvFUnl.', 'Student5'),
(2, 'Francisco', '$2b$10$ZPhyO9ZrhgGKFPkYptZNKeDvnfg96tKIl9tHTcssESWDTjdDkcAhq', 'Student3'),
(3, 'Cacho', '$2b$10$UF.3fKcRPAwevhoVtnJTuORLHFDRW7NyJqtrO380bq2ktzdJuOgye', 'Student2'),
(4, 'Galve', '$2b$10$d172UGEXRk.PfYIWrvO/4.HanR5FM7JB4m1L4cVXG6hoik.wZNrlS', 'Student4'),
(5, 'Balais', '$2b$10$nEbsFSo6kn/wGV/KKCjEVukio3uuAd1J3J5sGQJljzeIN1iNoBdwq', 'Student1'),
(6, 'user', '$2b$10$yGVmBpjXklzqXRCo.nxsv.lWT.j.jDSm2Mj47Gb414JkAiOMT6SuK', 'Student1'),
(7, 'admin', '$2b$10$b75ENVw5cUJDyNSBL4ajG.X61gtPvWdOSPJd30H.B6k.T8Gq6092S', 'Student1'),
(8, 'SampleUser', '$2b$10$3R1jvEcyppjO/xh6UDcaE.lXoNnzssLXIQ55wx2rc3hMOJqkOBxeO', 'Student1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
