
DROP TABLE IF EXISTS property;
		
CREATE TABLE property (
  id SERIAL primary key,
  Owner INTEGER NOT NULL,
  Cleanliness float(1) NULL,
  Communication float(1) NULL,
  CheckIN float(1)NULL,
  Accuracy float(1) NULL,
  Location float(1) NULL,
  Value float(1) NULL,
  Overall SMALLINT
)


DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  Name varchar(100) NOT NULL DEFAULT NULL,
  Photo varchar(100) NULL DEFAULT NULL,
  Owner boolean not NULL
);


DROP TABLE IF EXISTS review;
		
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  Property_ID INTEGER NULL,
  User_ID INTEGER NOT NULL,
  Date VARCHAR(1000) NOT NULL,
  Comment text NOT NULL,
  Cleanliness SMALLINT NULL,
  Communication SMALLINT NULL,
  CheckIN SMALLINT NULL,
  Accuracy SMALLINT NULL,
  Location SMALLINT NULL,
  Value SMALLINT NULL,
  ResponseComment text NULL,
  ResponseDate VARCHAR(1000) NULL
);



-- ---
-- Foreign Keys 
-- -- ---

-- ALTER TABLE Review ADD FOREIGN KEY (User_ID) REFERENCES users (id);
-- ALTER TABLE Review ADD FOREIGN KEY (Property_ID) REFERENCES property (id);
-- ALTER TABLE Review ADD FOREIGN KEY (ResponseOwner) REFERENCES user (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Property` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Review` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Response` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Property` (`id`,`Owner`) VALUES
-- ('','');
-- INSERT INTO `User` (`id`,`Name`,`Photo`,`Type`) VALUES
-- ('','','','');
-- INSERT INTO `Review` (`id`,`User_ID`,`Date`,`Comment`,`Property_ID`,`Cleanliness`,`Accuracy`,`Location`,`CheckIN`,`Value`,`Communication`,`ResponseOwner`,`ResponseComment`,`ResponseDate`) VALUES
-- ('','','','','','','','','','','','','','');
-- INSERT INTO `Response` (`id`,`Comment`,`Owner`) VALUES
-- ('','','');