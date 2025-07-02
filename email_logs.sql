-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2025 at 12:20 PM
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
-- Table structure for table `email_logs`
--

CREATE TABLE `email_logs` (
  `id` int(11) NOT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `recipient` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `email_logs`
--

INSERT INTO `email_logs` (`id`, `sender`, `recipient`, `subject`, `message`, `sent_at`) VALUES
(3, 'tarroza', 'kennethtarroza22@gmail.com', 'test', 'PUTANGINAAAAAAAA', '2025-06-29 18:45:00'),
(4, 'tarroza', 'kennethtarroza22@gmail.com', 'test', 'ulol', '2025-06-29 18:52:55'),
(5, 'tarroza', 'kennethtarroza22@gmail.com', 'test', 'gago', '2025-06-29 18:57:46'),
(6, 'francisco', 'kennethtarroza22@gmail.com', 'test', 'hello!', '2025-06-30 02:19:37'),
(7, 'cacho', 'cacho.markchristian17@gmail.com', 'test', 'burat', '2025-06-30 03:02:18'),
(8, 'galve', 'galve.johnralph722@gmail.com', 'test', 'burat', '2025-06-30 04:01:37'),
(9, 'balais', 'kennethtarroza22@gmail.com', 'test', 'test', '2025-06-30 11:14:55'),
(10, 'balais', 'tarroza22kenneth@gmail.com', 'test', 'fuck u!', '2025-06-30 15:18:28'),
(11, 'balais', 'tarroza22kenneth@gmail.com', 'test', 'hello', '2025-06-30 15:29:56'),
(12, 'balais', 'kennethtarroza22@gmail.com', 'test', 'tangina', '2025-06-30 16:32:43'),
(13, 'cacho', 'kennethtarroza22@gmail.com', 'test', 'gago', '2025-06-30 16:34:54'),
(14, 'francisco', 'kennethtarroza22@gmail.com', 'test', 'ulol', '2025-06-30 16:35:48'),
(15, 'galve', 'kennethtarroza22@gmail.com', 'test', 'tite', '2025-06-30 16:36:46'),
(16, 'tarroza', 'kennethtarroza22@gmail.com', 'test', 'burat', '2025-06-30 16:37:48'),
(17, 'balais', 'kennethtarroza22@gmail.com', 'test', 'tarantado', '2025-06-30 16:41:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email_logs`
--
ALTER TABLE `email_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email_logs`
--
ALTER TABLE `email_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
