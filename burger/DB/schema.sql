DROP DATABASE IF EXISTS burgerdatabase;
CREATE DATABASE burgerdatabase;

USE burgerdatabase;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);