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

INSERT INTO student(name, email, career, birth_date, phone_number, country, city)
VALUES("Violeta Gonzalez", "violeta@gmail.com", "Data science", "1984-07-04", "+541161507899", "Argentina", "CABA");

INSERT INTO student(name, email, career, birth_date, phone_number, country, city)
VALUES("Santiago Perez", "santiperez@gmail.com", "Data science", "1995-12-02", "+541166989984", "Argentina", "CABA");

  