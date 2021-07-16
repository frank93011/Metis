CREATE DATABASE metis_db;
USE metis_db;

CREATE USER 'metis-admin'@'%' IDENTIFIED BY 'admin-password';
CREATE USER 'metis-user'@'%' IDENTIFIED BY 'user-password';

GRANT ALL PRIVILEGES ON intranet_db.* TO 'metis-admin'@'%';
GRANT SELECT, INSERT, DELETE ON intranet_db.* TO 'metis-user'@'%';

DROP TABLE IF EXISTS User; 

CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `password` varchar(32),
  `introduction` varchar(128),
  `email` varchar(64),
  `photo` varchar(128),
  PRIMARY KEY (`id`)
); 
