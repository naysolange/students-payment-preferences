const sql = require("../db.js");

const Student = function(student) {
  this.id = student.id;
  this.name = student.name;
  this.email = student.email;
  this.career = student.career;
  this.birthDate = student.birth_date;
  this.phoneNumber = student.phone_number;
  this.country = student.country;
  this.city = student.city;
  this.paymentOption = student.payment_option;
};

Student.getAll = result => {
    sql.query("SELECT s.id, name, email, career, birth_date, phone_number, country, city, description as payment_option FROM student s INNER JOIN payment_option p ON p.id = s.payment_option_id;", 
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Students: ", res);
      result(null, res);
    });
  };

Student.save = (student, result) => {
    stmt = `INSERT INTO student(name, email, career, birth_date, phone_number, country, city, 
            payment_option_id)
            select ?, ?, ?, ?, ?, ?, ?, 
            (select p.id from payment_option p where p.description=?)`
  
    placeholders = [student.name, student.email, student.career, student.birthDate, 
      student.phoneNumber, student.country, student.city, student.paymentOption];

    sql.query(stmt, placeholders,
      
      (err) => {
        if (err) {
          console.log("Error: ", err);
          result(err);
          return
        } 
        
        console.log("Student saved OK", student);
        result(null);

      }
    );
};

module.exports = Student;
