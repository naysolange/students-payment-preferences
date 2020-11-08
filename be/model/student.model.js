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
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Students: ", res);
      result(null, res);
    });
  };

module.exports = Student;

