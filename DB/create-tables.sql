USE students;

CREATE TABLE payment_option
(
     id INTEGER NOT NULL AUTO_INCREMENT,
     description VARCHAR(100) NOT NULL,
     PRIMARY KEY (id)
);

INSERT INTO payment_option(description) VALUES("Credit card (1 installment)");
INSERT INTO payment_option(description) VALUES("Credit card (3 installments)");
INSERT INTO payment_option(description) VALUES("Credit card (6 installments)");
INSERT INTO payment_option(description) VALUES("Debit card");
INSERT INTO payment_option(description) VALUES("Cash");
INSERT INTO payment_option(description) VALUES("Transfer");

CREATE TABLE student
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    career VARCHAR(100) NOT NULL,
    birth_date DATE,
    phone_number VARCHAR(50) NOT NULL,
    country VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL, 
    payment_option_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (payment_option_id) REFERENCES payment_option(id)
); 

INSERT INTO student(name, email, career, birth_date, phone_number, country, city, payment_option_id)
VALUES("Violeta Gonzalez", "violeta@gmail.com", "Data science", "1984-07-04", "+541161507899", "Argentina", "CABA", 1);

INSERT INTO student(name, email, career, birth_date, phone_number, country, city, payment_option_id)
VALUES("Santiago Perez", "santiperez@gmail.com", "Data science", "1995-12-02", "+541166989984", "Argentina", "CABA", 4);

  