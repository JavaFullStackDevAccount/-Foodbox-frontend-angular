-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2021 at 04:00 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodbox_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `foodbox_cart`
--

CREATE TABLE `foodbox_cart` (
  `id` bigint(20) NOT NULL,
  `food_box_user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `foodbox_cart`
--

INSERT INTO `foodbox_cart` (`id`, `food_box_user_id`) VALUES
(32, 31),
(34, 33);

-- --------------------------------------------------------

--
-- Table structure for table `foodbox_cart_cart_items`
--

CREATE TABLE `foodbox_cart_cart_items` (
  `foodbox_cart_id` bigint(20) NOT NULL,
  `cart_items_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `foodbox_cart_cart_items`
--

INSERT INTO `foodbox_cart_cart_items` (`foodbox_cart_id`, `cart_items_id`) VALUES
(32, 1),
(32, 3),
(32, 5);

-- --------------------------------------------------------

--
-- Table structure for table `foodbox_orders`
--

CREATE TABLE `foodbox_orders` (
  `id` bigint(20) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` double NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `public_visiblity` bit(1) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `food_box_user_id` bigint(20) NOT NULL,
  `order_uuid` varchar(255) DEFAULT NULL,
  `ordered_on` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `foodbox_user`
--

CREATE TABLE `foodbox_user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_type_admin` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `foodbox_user`
--

INSERT INTO `foodbox_user` (`id`, `address`, `email`, `name`, `password`, `phone_number`, `user_type_admin`) VALUES
(31, 'Address of the user', 'user@user.com', 'user', '12345', '1231231234', b'0'),
(33, 'Address of the use', 'admin@user.com', 'admin', '12345', '1231231234', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `food_item`
--

CREATE TABLE `food_item` (
  `id` bigint(20) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` double NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `public_visiblity` bit(1) NOT NULL,
  `rating` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food_item`
--

INSERT INTO `food_item` (`id`, `category`, `description`, `discount`, `image_url`, `price`, `public_visiblity`, `rating`, `title`) VALUES
(1, 'Chicken', 'This is a sample food item for food item 0 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 1, 'Food item 0'),
(2, 'Chicken', 'This is a sample food item for food item 1 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 4, 'Food item 1'),
(3, 'Indian', 'This is a sample food item for food item 2 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 4, 'Food item 2'),
(4, 'Veg', 'This is a sample food item for food item 3 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 3, 'Food item 3'),
(5, 'Chicken', 'This is a sample food item for food item 4 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 3, 'Food item 4'),
(6, 'Chicken', 'This is a sample food item for food item 5 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 4, 'Food item 5'),
(7, 'Veg', 'This is a sample food item for food item 6 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 1, 'Food item 6'),
(8, 'Indian', 'This is a sample food item for food item 7 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 2, 'Food item 7'),
(9, 'Pizza', 'This is a sample food item for food item 8 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 2, 'Food item 8'),
(10, 'Veg', 'This is a sample food item for food item 9 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 3, 'Food item 9'),
(11, 'Veg', 'This is a sample food item for food item 10 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 4, 'Food item 10'),
(12, 'Pizza', 'This is a sample food item for food item 11 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 4, 'Food item 11'),
(13, 'Pizza', 'This is a sample food item for food item 12 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 3, 'Food item 12'),
(14, 'Chicken', 'This is a sample food item for food item 13 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 1, 'Food item 13'),
(15, 'Veg', 'This is a sample food item for food item 14 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 1, 'Food item 14'),
(16, 'Pizza', 'This is a sample food item for food item 15 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 2, 'Food item 15'),
(17, 'Indian', 'This is a sample food item for food item 16 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 3, 'Food item 16'),
(18, 'Veg', 'This is a sample food item for food item 17 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 2, 'Food item 17'),
(19, 'Veg', 'This is a sample food item for food item 18 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 2, 'Food item 18'),
(20, 'Chicken', 'This is a sample food item for food item 19 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 4, 'Food item 19'),
(21, 'Pizza', 'This is a sample food item for food item 20 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 2, 'Food item 20'),
(22, 'Chicken', 'This is a sample food item for food item 21 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 3, 'Food item 21'),
(23, 'Pizza', 'This is a sample food item for food item 22 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 3, 'Food item 22'),
(24, 'Chicken', 'This is a sample food item for food item 23 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 2, 'Food item 23'),
(25, 'Pizza', 'This is a sample food item for food item 24 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 4, 'Food item 24'),
(26, 'Pizza', 'This is a sample food item for food item 25 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 2, 'Food item 25'),
(27, 'Pizza', 'This is a sample food item for food item 26 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 2, 'Food item 26'),
(28, 'Chicken', 'This is a sample food item for food item 27 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 3, 'Food item 27'),
(29, 'Pizza', 'This is a sample food item for food item 28 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'1', 1, 'Food item 28'),
(30, 'Chicken', 'This is a sample food item for food item 29 description for testing purposes only and will br removed from production', 10, 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg', 543, b'0', 3, 'Food item 29');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(35);

-- --------------------------------------------------------

--
-- Table structure for table `ordered_food_items`
--

CREATE TABLE `ordered_food_items` (
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `foodbox_cart`
--
ALTER TABLE `foodbox_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjmi41u62h7bam9txmx4rl7gts` (`food_box_user_id`);

--
-- Indexes for table `foodbox_cart_cart_items`
--
ALTER TABLE `foodbox_cart_cart_items`
  ADD PRIMARY KEY (`foodbox_cart_id`,`cart_items_id`),
  ADD UNIQUE KEY `UK_8xa15470jkgva8l6oc32hox46` (`cart_items_id`);

--
-- Indexes for table `foodbox_orders`
--
ALTER TABLE `foodbox_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foodbox_user`
--
ALTER TABLE `foodbox_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food_item`
--
ALTER TABLE `food_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordered_food_items`
--
ALTER TABLE `ordered_food_items`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `foodbox_cart`
--
ALTER TABLE `foodbox_cart`
  ADD CONSTRAINT `FKjmi41u62h7bam9txmx4rl7gts` FOREIGN KEY (`food_box_user_id`) REFERENCES `foodbox_user` (`id`);

--
-- Constraints for table `foodbox_cart_cart_items`
--
ALTER TABLE `foodbox_cart_cart_items`
  ADD CONSTRAINT `FK4tjr7l464nvrh0k0wasdkjclh` FOREIGN KEY (`foodbox_cart_id`) REFERENCES `foodbox_cart` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
