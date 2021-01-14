CREATE TABLE `quotes` (
  `quote_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `quote_data` json DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`quote_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
