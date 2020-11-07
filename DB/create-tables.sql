USE students;

CREATE TABLE student
(
id INTEGER AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(255) NOT NULL,
career VARCHAR(100) NOT NULL,
birth_date DATE,
phone_number VARCHAR(50) NOT NULL,
country VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL, 
PRIMARY KEY (id)
);

  